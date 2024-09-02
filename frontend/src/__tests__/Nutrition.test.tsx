import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import Nutrition from '../pages/Nutrition';
import { mockContextValues } from '../test-util/mockdata';
import { mockNutritionDataArray } from '../test-util/mockNutritionData';
import { BagContext } from '../BagContext';

const server = setupServer(
  http.get('/nutrition', () => {
    return HttpResponse.json(mockNutritionDataArray)
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('nutrition page render test and click nutrition nav', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Nutrition />
      </BagContext.Provider>
    </BrowserRouter>
  );

  await waitFor(() => {
    const appetizersText = screen.getAllByText(/appetizers/i);
    expect(appetizersText).toHaveLength(2);
  });

  const soupsText = screen.getAllByText(/soups/i)[0] as HTMLAnchorElement;
  
  userEvent.click(soupsText);
  await waitFor(() => {
    expect(window.location.hash).toEqual('#soups');
  });
});

test('nutrition page no API call test', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Nutrition />
      </BagContext.Provider>
    </BrowserRouter>
  );

  server.use(
    http.get('/nutrition', () => {
      return new HttpResponse(null, {status: 500})
    }),
  )
  await waitFor(() => {
    expect(screen.getByLabelText('loading-spinner')).toBeInTheDocument();
  });
});

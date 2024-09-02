import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import Menu from '../pages/Menu';
import { mockContextValues } from '../test-util/mockdata';
import { mockMenuDataArray  } from '../test-util/mockMenuData';
import { BagContext } from '../BagContext';

const server = setupServer(
  http.get('/menu', () => {
    return HttpResponse.json(mockMenuDataArray)
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('menu page render test and click menu nav', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Menu />
      </BagContext.Provider>
    </BrowserRouter>
  );

  await waitFor(() => {
    const appetizersText = screen.getAllByText(/appetizers/i);
    expect(appetizersText).toHaveLength(2);
  });

  const beveragesText = screen.getAllByText(/beverages/i)[0] as HTMLAnchorElement;
  
  userEvent.click(beveragesText);
  await waitFor(() => {
    expect(window.location.hash).toEqual('#beverages');
  });

  userEvent.click(screen.getByLabelText('egg-drop-soup-card'));
  await waitFor(() => {
    expect(screen.getByText('Velvety broth, julienned carrots, green onion')).toBeInTheDocument();
  });
});

test('menu page no API call test', async () => {
  render(
    <BrowserRouter>
      <BagContext.Provider value={mockContextValues}>
        <Menu />
      </BagContext.Provider>
    </BrowserRouter>
  );

  server.use(
    http.get('/menu', () => {
      return new HttpResponse(null, {status: 500})
    }),
  )
  await waitFor(() => {
    expect(screen.getByLabelText('loading-spinner')).toBeInTheDocument();
  });
});
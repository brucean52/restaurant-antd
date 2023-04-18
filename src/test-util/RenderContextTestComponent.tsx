import { useContext} from 'react';
import { mockItemOne, mockItemTwo, mockItemThree, editedMockItemOne } from './mockdata';
import { BagContext } from '../BagContext';
import { BagContextType } from '../types';

const mockBagItemsArray = [mockItemOne, mockItemTwo, mockItemThree];

const RenderContextTestComponent = () => {
  const { 
    subtotalText,
    taxText,
    totalText,
    totalItems,
    addItem,
    updateItem,
    deleteItem
  } = useContext(BagContext) as BagContextType;

  return (
    <div>
      <p aria-label="subtotal-txt">{subtotalText}</p>
      <p aria-label="tax-txt">{taxText}</p>
      <p aria-label="total-txt">{totalText}</p>
      <p aria-label="total-items">{totalItems}</p>
      
      {mockBagItemsArray.map((item, index) => {
        let count = index + 1;
        return (
          <div key={count}>
          <button
            aria-label={`add-btn-item${count}`}
            onClick={() => addItem(item)}
          >Add mock item {count}</button>
          <button
            aria-label={`delete-btn-item${count}`}
            onClick={() => deleteItem(item.bagItemId)}
          >delete mock item {count}</button>
        </div>
        )
      })}

      <button
        aria-label={`edit-btn-item1`}
        onClick={() => updateItem(editedMockItemOne)}
      >update mock item 1</button>
    </div>
  )
};

export default RenderContextTestComponent;
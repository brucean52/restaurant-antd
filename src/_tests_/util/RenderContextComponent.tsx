import { useContext} from 'react';
import { mockItem1, mockItem2, mockItem3, editedMockItem1 } from '../../assets/mockdata';
import { BagContext } from '../../BagContext';
import { BagContextType } from '../../types';

const mockBagItemsArray = [mockItem1, mockItem2, mockItem3];

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
        onClick={() => updateItem(editedMockItem1)}
      >update mock item 1</button>
    </div>
  )
};

export default RenderContextTestComponent;
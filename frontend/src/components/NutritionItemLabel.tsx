import React from 'react';
import { NutritionItem } from '../types';
import { DAILY_VALUE_TEXT } from '../assets/defaultData';

type NutritionItemLabelProps = {
  nutriItem: NutritionItem,
};

const NutritionItemLabel = (props: NutritionItemLabelProps) => {

  const rootStyle: React.CSSProperties = {
    height: '425px',
    border: '1px solid black',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    padding: '5px',
    fontFamily: 'Helvetica, Arial, sans-serif'
  };

  const servingsStyle: React.CSSProperties = {
    fontSize: '14px',
    borderBottom: '7px solid black',
    paddingBottom: '3px',
  };

  const amountStyle: React.CSSProperties = {
    fontWeight: 800,
    fontSize: '11px',
    marginTop: '3px',
    paddingBottom: '1px',
    borderBottom: '1px solid rgba(0,0,0,0.25)'
  };

  const caloriesContainStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '3px solid black',
    marginTop: '2px'
  };


  const dailyValueTextStyle: React.CSSProperties = {
    fontWeight: 800,
    fontSize: '11px',
    marginTop: '3px',
    paddingBottom: '2px',
    display: 'flex',
    justifyContent: 'end',
    borderBottom: '1px solid rgba(0,0,0,0.25)'
  };

  const nutriValueContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid rgba(0,0,0,0.25)',
    padding: '2px 0'
  };

  const nutriValueMarginStyle: React.CSSProperties = {
    marginLeft: '16px'
  };

  const dvTextStyle: React.CSSProperties = {
    fontSize: '11px',
    marginTop: '8px'
  };

  return (
    <div style={rootStyle}>
      <div style={{fontWeight: 800, fontSize: '32px'}}>Nutrition Facts</div>
      <div style={servingsStyle}>{props.nutriItem.servings} Servings Per Container</div>
      <div style={amountStyle}>Amount Per Serving</div>
      
      <div style={caloriesContainStyle}>
        <div><span style={{fontWeight: 800}}>Calories</span> {props.nutriItem.calories}</div>
        <div>Calories from Fat {props.nutriItem.calsFromFat}</div>
      </div>
      
      <div style={dailyValueTextStyle}>% Daily Value*</div>
      
      <div style={nutriValueContainerStyle}>
        <div><span style={{fontWeight: 800}}>Total Fat</span> {props.nutriItem.fat}</div>
        <div style={{fontWeight: 800}}>{props.nutriItem.dvFat}%</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div style={nutriValueMarginStyle}>Saturated Fat {props.nutriItem.saturatedFat}</div>
        <div style={{fontWeight: 800}}>{props.nutriItem.dvSaturatedFat}%</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div><em style={nutriValueMarginStyle}>Trans</em> Fat {props.nutriItem.transFat}</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div><span style={{fontWeight: 800}}>Cholesterol</span> {props.nutriItem.cholesterol}</div>
        <div style={{fontWeight: 800}}>{props.nutriItem.dvCholesterol}%</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div><span style={{fontWeight: 800}}>Sodium</span> {props.nutriItem.sodium}</div>
        <div style={{fontWeight: 800}}>{props.nutriItem.dvSodium}%</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div><span style={{fontWeight: 800}}>Total Carbohydrate</span> {props.nutriItem.carbohydrates}</div>
        <div style={{fontWeight: 800}}>{props.nutriItem.dvCarbohydrates}%</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div style={nutriValueMarginStyle}>Dietary Fiber {props.nutriItem.fiber}</div>
        <div style={{fontWeight: 800}}>{props.nutriItem.dvFiber}%</div>
      </div>

      <div style={nutriValueContainerStyle}>
        <div style={nutriValueMarginStyle}>Sugars {props.nutriItem.saturatedFat}</div>
      </div>

      <div style={{...nutriValueContainerStyle, borderBottom: '7px solid black'}}>
        <div><span style={{fontWeight: 800}}>Protein</span> {props.nutriItem.protein}</div>
      </div>

      <div style={dvTextStyle}>{DAILY_VALUE_TEXT}</div>
    </div>
  );
};

export default NutritionItemLabel;

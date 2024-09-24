import React, { useState, useContext } from 'react';
import { theme } from 'antd';
import { PlusSquareOutlined, CloseCircleOutlined } from '@ant-design/icons';
import NutritionItemLayout from './NutritionItemLayout';
import { nutriTableHeaders } from '../assets/defaultData';
import { NutritionItem, NutriTableHeader } from '../types';
import { useAppStore } from '../store/useAppStore';

type NutritionTableLayoutProps = {
  nutritionDataArray: NutritionItem[],
};

type TableDataRowProps = {
  nutriItem: NutritionItem,
};

const NutritionTable: React.FC<NutritionTableLayoutProps> = (props) => {
  const {
    token: { 
      colorPrimary,
      colorBgLayout,
      borderRadius,
      boxShadowSecondary,
    }
  } = theme.useToken();

  const { isDarkMode } = useAppStore();
  const [isExpanded, setIsExpanded] = useState('');

  const layoutStyle: React.CSSProperties = {
    display: 'flex',
    width: '100%',
    overflowX: 'auto',
    margin: '0 1%'
  };

  const tableStyle: React.CSSProperties = {
    borderSpacing: '0px',
    borderColor: '#FAFAFA',
    width: '100%',
    margin: '0 1% 1% 2%',
    borderRadius,
    boxShadow: boxShadowSecondary
  };

  const tableHeaderStyle: React.CSSProperties = {
    backgroundColor:  '#141414',
    borderBottom: `${colorPrimary} 4px solid`,
    color: '#FFFFFF',
    boxShadow: boxShadowSecondary,
  };

  const renderTableHeaders = nutriTableHeaders.map((column: NutriTableHeader) => {
    return <th key={column.id} style={tableHeaderStyle} className="nutri-table-header">{column.title}</th>
  });

  const RenderDataRow = (props: TableDataRowProps) => {
    const { nutriItem } = props;
    // let name = nutriItem.name;
    // if (name.includes('|')) {
    //   name.split('|')
    // }
    
    return (
      <>
        <td>
          <PlusSquareOutlined
            aria-label={`expand-icon-${nutriItem.id}`}
            className="expand-icon"
            onClick={() => setIsExpanded(nutriItem.name)}
          />
          <span style={{marginLeft: '12px'}}>{nutriItem.name}</span>
        </td>
        <td>{nutriItem.servings}</td>
        <td>{nutriItem.calories}</td>
        <td>{nutriItem.calsFromFat}</td>
        <td>{nutriItem.fat}</td>
        <td>{nutriItem.saturatedFat}</td>
        <td>{nutriItem.transFat}</td>
        <td>{nutriItem.cholesterol}</td>
        <td>{nutriItem.sodium}</td>
        <td>{nutriItem.carbohydrates}</td>
        <td>{nutriItem.fiber}</td>
        <td>{nutriItem.sugar}</td>
        <td>{nutriItem.protein}</td>
      </>
    )
  };

  const RenderExpandedRow: React.FC<TableDataRowProps> = (props) => {
    let fatAmount = parseInt(props.nutriItem.fat.replace('g', ''));
    let carbsAmount = parseInt(props.nutriItem.carbohydrates.replace('g', ''));
    let proteinAmount = parseInt(props.nutriItem.protein.replace('g', ''));
    let total = fatAmount + carbsAmount + proteinAmount;    
    let fatPercent = Math.round((fatAmount / total) * 100);
    let carbsPercent = Math.round((carbsAmount / total) * 100);
    let proteinPercent =  100 - (fatPercent + carbsPercent);
    let chartData = [
      {
        name: 'Fat',
        value: fatPercent
      },
      {
        name: 'Carbs',
        value: carbsPercent
      },
      {
        name: 'Protein',
        value: proteinPercent
      },
    ];
    return (
      <td style={{ backgroundColor: colorBgLayout }} colSpan={13}>
        <CloseCircleOutlined
          className="nutri-expand-close-icon"
          aria-label={`close-expanded-icon-${props.nutriItem.id}`} 
          onClick={() => setIsExpanded('')}
        />
        <NutritionItemLayout nutriItem={props.nutriItem} chartData={chartData}/>
      </td>
    )
  };

  return (
    <div style={layoutStyle}>
      <table style={tableStyle}>
        <thead>
          <tr>{renderTableHeaders}</tr>
        </thead>
        <tbody>
          {props.nutritionDataArray.map((nutriItem: NutritionItem) => {
            return (
              <tr 
                key={nutriItem.id} 
                className={isDarkMode ? 'nutri-table-row-dark' : 'nutri-table-row'}>
                {isExpanded === nutriItem.name
                  ? <RenderExpandedRow nutriItem={nutriItem}/>
                  : <RenderDataRow nutriItem={nutriItem}/>}
              </tr>
            )
          })}
          </tbody>
      </table>
    </div>
  );
};

export default NutritionTable;

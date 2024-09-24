import React, { useEffect, useContext } from 'react';
import { List, Typography } from 'antd';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { scroller, Element} from 'react-scroll';
import { nutriTableHeaders, RADIAN } from '../assets/defaultData';
import { NutritionItem, NutriTableHeader } from '../types';
import { useAppStore } from '../store/UseAppStore';

const { Title } = Typography;
const COLORS = ["#9c1f16", "#d49b1c", "#68831c"];

type NutritionItemLayoutProps = {
  nutriItem: NutritionItem,
  chartData: any
};

const NutritionItemLayout = (props: NutritionItemLayoutProps) => {
  const { isDarkMode } = useAppStore();

  useEffect(() => {
    scroller.scrollTo('main', {
      smooth: 'easeInOutQuint',
      offset: -180,
    });
  }, []);

  const mainStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '200px auto',
    padding: '1% 7%'
  };

  const nutriDisplayItems = nutriTableHeaders.slice(1).map((column: NutriTableHeader) => {
    return {
      key: column.id,
      label: column.title,
      children: props.nutriItem[column.id],
    }
  });

  const renderNutriListItem = (item: any) => {
    return (
      <List.Item>
        <div style={{ fontWeight: 500 }}>{item.label}</div>
        <div>{item.children}</div>
      </List.Item>
    )
  };

  const renderCustomLabel = (labelItem: any) => {
    if (labelItem.percent !== 0){
      const radius = labelItem.innerRadius + (labelItem.outerRadius - labelItem.innerRadius) * 0.5;
      const x = labelItem.cx + radius * Math.cos(-labelItem.midAngle * RADIAN);
      const y = labelItem.cy + radius * Math.sin(-labelItem.midAngle * RADIAN);
    
      return (
        <text
          style={{ fontSize: '24px', fontWeight: 'bold' }}
          x={x}
          y={y}
          fill="white"
          textAnchor={x > labelItem.cx ? 'start' : 'end'}
          dominantBaseline="central"
        >
          {`${(labelItem.percent * 100).toFixed(0)}%`}
        </text>
      );
    }
  };

  return (
    <Element name="main" style={{ minHeight: '700px' }}>
      <Title level={3} style={{ marginLeft: '7%'}}>{props.nutriItem.name}</Title>
      <div style={mainStyle}>
        <List
          style={{ backgroundColor: isDarkMode ? '#3c3c3c' : '#e6e6e6' }}
          size="small"
          bordered
          dataSource={nutriDisplayItems}
          renderItem={renderNutriListItem}
        />
        <ResponsiveContainer width="100%" height={500}>
          <PieChart width={500} height={500}>
            <Pie
              dataKey="value"
              data={props.chartData}
              nameKey="name"
              labelLine={false}
              label={renderCustomLabel}
              cy="60%"
              outerRadius={150}
            >
              {props.chartData.map((_: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Legend
              iconType='circle'
              wrapperStyle={{ top: '50px', fontSize: '24px'}}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Element>
  );
};

export default NutritionItemLayout;
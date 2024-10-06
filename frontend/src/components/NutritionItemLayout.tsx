import React, { useEffect, useState } from 'react';
import { Typography, Segmented, theme } from 'antd';
import {
  PictureOutlined,
  PieChartOutlined,
  BarChartOutlined
} from '@ant-design/icons';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  TooltipProps
} from 'recharts';
import {
  ValueType,
  NameType,
} from 'recharts/types/component/DefaultTooltipContent';
import { scroller, Element } from 'react-scroll';
import NutritionItemLabel from './NutritionItemLabel';
import { RADIAN, COLORS } from '../assets/defaultData';
import {
  NutritionItem,
  NutriVisualSegment
} from '../types';

const { Title, Text } = Typography;

type NutritionItemLayoutProps = {
  nutriItem: NutritionItem,
  chartData: any
};

const NutritionItemLayout = (props: NutritionItemLayoutProps) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [showNutriVisual, setShowNutriVisual] = useState<NutriVisualSegment>('image');

  useEffect(() => {
    scroller.scrollTo('main', {
      smooth: 'easeInOutQuint',
      offset: -180,
    });
  }, []);

  const mainStyle: React.CSSProperties = {
    display: 'grid',
    height: '500px',
    gridTemplateColumns: '275px auto',
    padding: '1% 6rem'
  };

  const imgStyle: React.CSSProperties = {
    border: `5px ridge ${colorPrimary}`,
    width: '100%',
    height: 'auto',
    maxWidth: '500px'
  };

  const segmentContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '16px 6rem 0 6rem'
  };

  const customTooltipStyle: React.CSSProperties = {
    backgroundColor: '#EEEEEE',
    fontSize: '14px',
    padding: '4px 12px',
    border: '1px solid #AAAAAA',
    color: 'black',
    borderRadius: '2px'
  };

  const renderCustomChartLabel = (labelItem: any) => {
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
          {`${labelItem.percent}%`}
        </text>
      );
    }
  };

  const CustomTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active) {
    return (
      <div style={customTooltipStyle}>
        <p>{`${payload?.[0].value}g`}</p>
      </div>
      );
    }

    return null;
  };

  const CustomPieTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>) => {
    if (active) {
    return (
      <div style={customTooltipStyle}>
        <p>{`${payload?.[0].name}`}</p>
      </div>
      );
    }

    return null;
  };

  return (
    <Element name="main" style={{ minHeight: '700px' }}>
      <Title level={3} style={{ margin: '0 0 0 6rem'}}>{props.nutriItem.name}</Title>
      
      <div style={segmentContainerStyle}>
        <Text>{props.nutriItem.description}</Text>
        <Segmented
          size="large"
          options={[
            { value: 'image', icon: <PictureOutlined /> },
            { value: 'barChart', icon: <BarChartOutlined /> },
            { value: 'pieChart', icon: <PieChartOutlined /> },
          ]}
          value={showNutriVisual}
          onChange={setShowNutriVisual}
        />
      </div>
      <div
        className={showNutriVisual === 'image'  ? 'nutri-item-main-image' : 'nutri-item-main-chart'}
        style={mainStyle}
      >
        <NutritionItemLabel nutriItem={props.nutriItem}/>

        {showNutriVisual === 'image'
          ?
            <img style={imgStyle} alt={props.nutriItem.name} src={props.nutriItem.imgSrc} />
          :
            <ResponsiveContainer style={{ margin: showNutriVisual === 'barChart' ? '0 1rem' : 0 }}>
              {showNutriVisual === 'barChart' 
              ?
                <BarChart
                  width={500}
                  height={300}
                  data={props.chartData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip cursor={{ fill: 'rgba(0, 0, 0, 0.2)' }} content={<CustomTooltip />}/>
                  <Bar dataKey="grams" >
                    {props.chartData.map((_: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Bar>
                </BarChart>
              :
                <PieChart width={500} height={500}>
                  <Pie
                    dataKey="percent"
                    data={props.chartData}
                    nameKey="name"
                    labelLine={false}
                    label={renderCustomChartLabel}
                    cy="50%"
                    outerRadius={150}
                  >
                    {props.chartData.map((_: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Legend
                    iconType='circle'
                    wrapperStyle={{ top: '0px', fontSize: '24px' }}
                  />
                  <Tooltip content={<CustomPieTooltip />}/>
                </PieChart>
            }
            </ResponsiveContainer>
        }
      </div>
    </Element>
  );
};

export default NutritionItemLayout;
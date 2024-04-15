import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

type SparklineAreaData = {
 x: number;
 yval: number; 
}

type SparkLineProps = {
  currentColor: string;
  id: string;
  type: "Line" | "Column" | "WinLoss" | "Pie" | "Area" | undefined;
  height: string;
  width: string;
  data: SparklineAreaData[];
  color: string;
}

const SparkLine = ({currentColor, id, type, height, width, data, color}:SparkLineProps) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
      tooltipSettings={{
        visible:true,
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible:true,
        }
      }}>
        <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine
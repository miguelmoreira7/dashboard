import React from 'react'
import { ChartComponent, SeriesCollectionDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesDirective } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

type StackedProps = {
  width: string,
  height: string,
}

const Stacked = ({width, height}: StackedProps) => {
  const { currentColor, currentMode } = useStateContext();
  const pallete = [currentColor, '#2c2c2c']
  return (
    <ChartComponent 
      width={width} 
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      background={currentMode === 'Dark' ? 'rgb(51,55,62)' : 'white'}
      legendSettings={{background: currentMode === 'Dark' ? 'rgb(51,55,62)' : 'white', textStyle: {color: currentMode === 'Dark' ? 'white' : ''}}}
      palettes={pallete}
      >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
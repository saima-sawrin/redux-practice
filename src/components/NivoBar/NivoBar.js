import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { Box, Button } from '@mui/material';

const NivoBar = () => {
    
    const data = [
        {
          "country": "AD",
          "hot dog": 125,
          "hot dogColor": "hsl(347, 70%, 50%)",
          "burger": 14,
          "burgerColor": "hsl(68, 70%, 50%)",
          "sandwich": 198,
          "sandwichColor": "hsl(73, 70%, 50%)",
          "kebab": 15,
          "kebabColor": "hsl(242, 70%, 50%)",
          "fries": 159,
          "friesColor": "hsl(103, 70%, 50%)",
          "donut": 66,
          "donutColor": "hsl(291, 70%, 50%)"
        },
        {
          "country": "AE",
          "hot dog": 33,
          "hot dogColor": "hsl(118, 70%, 50%)",
          "burger": 153,
          "burgerColor": "hsl(184, 70%, 50%)",
          "sandwich": 96,
          "sandwichColor": "hsl(45, 70%, 50%)",
          "kebab": 19,
          "kebabColor": "hsl(330, 70%, 50%)",
          "fries": 126,
          "friesColor": "hsl(221, 70%, 50%)",
          "donut": 93,
          "donutColor": "hsl(147, 70%, 50%)"
        },
        {
          "country": "AF",
          "hot dog": 150,
          "hot dogColor": "hsl(108, 70%, 50%)",
          "burger": 16,
          "burgerColor": "hsl(35, 70%, 50%)",
          "sandwich": 176,
          "sandwichColor": "hsl(317, 70%, 50%)",
          "kebab": 63,
          "kebabColor": "hsl(119, 70%, 50%)",
          "fries": 193,
          "friesColor": "hsl(99, 70%, 50%)",
          "donut": 66,
          "donutColor": "hsl(115, 70%, 50%)"
        },
        {
          "country": "AG",
          "hot dog": 195,
          "hot dogColor": "hsl(218, 70%, 50%)",
          "burger": 129,
          "burgerColor": "hsl(179, 70%, 50%)",
          "sandwich": 143,
          "sandwichColor": "hsl(270, 70%, 50%)",
          "kebab": 116,
          "kebabColor": "hsl(221, 70%, 50%)",
          "fries": 64,
          "friesColor": "hsl(103, 70%, 50%)",
          "donut": 3,
          "donutColor": "hsl(72, 70%, 50%)"
        },
        {
          "country": "AI",
          "hot dog": 190,
          "hot dogColor": "hsl(18, 70%, 50%)",
          "burger": 145,
          "burgerColor": "hsl(170, 70%, 50%)",
          "sandwich": 165,
          "sandwichColor": "hsl(244, 70%, 50%)",
          "kebab": 22,
          "kebabColor": "hsl(206, 70%, 50%)",
          "fries": 120,
          "friesColor": "hsl(305, 70%, 50%)",
          "donut": 33,
          "donutColor": "hsl(192, 70%, 50%)"
        },
        {
          "country": "AL",
          "hot dog": 18,
          "hot dogColor": "hsl(34, 70%, 50%)",
          "burger": 65,
          "burgerColor": "hsl(206, 70%, 50%)",
          "sandwich": 173,
          "sandwichColor": "hsl(325, 70%, 50%)",
          "kebab": 126,
          "kebabColor": "hsl(169, 70%, 50%)",
          "fries": 168,
          "friesColor": "hsl(101, 70%, 50%)",
          "donut": 133,
          "donutColor": "hsl(328, 70%, 50%)"
        },
        {
          "country": "AM",
          "hot dog": 29,
          "hot dogColor": "hsl(256, 70%, 50%)",
          "burger": 26,
          "burgerColor": "hsl(296, 70%, 50%)",
          "sandwich": 177,
          "sandwichColor": "hsl(156, 70%, 50%)",
          "kebab": 145,
          "kebabColor": "hsl(0, 70%, 50%)",
          "fries": 179,
          "friesColor": "hsl(100, 70%, 50%)",
          "donut": 93,
          "donutColor": "hsl(92, 70%, 50%)"
        }
      ]
  
   
    return (
        <Box m="1.5rem 2.5rem">
 
        <Box
          mt="40px"
          height="75vh"
         
          borderRadius="4px"
        >
          {data ? (
              <ResponsiveBar
              data={data}
              keys={[
                  'hot dog',
                  'burger',
                  'sandwich',
                  'kebab',
                  'fries',
                  'donut'
              ]}
              indexBy="country"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: 'linear' }}
              indexScale={{ type: 'band', round: true }}
              colors={{ scheme: 'nivo' }}
              defs={[
                  {
                      id: 'dots',
                      type: 'patternDots',
                      background: 'inherit',
                      color: '#38bcb2',
                      size: 4,
                      padding: 1,
                      stagger: true
                  },
                  {
                      id: 'lines',
                      type: 'patternLines',
                      background: 'inherit',
                      color: '#eed312',
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10
                  }
              ]}
              fill={[
                  {
                      match: {
                          id: 'fries'
                      },
                      id: 'dots'
                  },
                  {
                      match: {
                          id: 'sandwich'
                      },
                      id: 'lines'
                  }
              ]}
              borderColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'country',
                  legendPosition: 'middle',
                  legendOffset: 32
              }}
              axisLeft={{
                  tickSize: 5,
                  tickPadding: 5,
                  tickRotation: 0,
                  legend: 'food',
                  legendPosition: 'middle',
                  legendOffset: -40
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                  from: 'color',
                  modifiers: [
                      [
                          'darker',
                          1.6
                      ]
                  ]
              }}
              legends={[
                  {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                          {
                              on: 'hover',
                              style: {
                                  itemOpacity: 1
                              }
                          }
                      ]
                  }
              ]}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
          />
      ) : (
            <>Loading...</>
          )}
        </Box>
      </Box>
    );
  };
  


export default NivoBar;
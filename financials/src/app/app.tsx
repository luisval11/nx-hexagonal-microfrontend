import styled from 'styled-components';

import { Chart } from '@nx-hexagonal-microfrontend/ui-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Chart options={{

        title: {
          text: 'Logarithmic axis demo'
        },

        xAxis: {
          tickInterval: 1,
          type: 'logarithmic',
          accessibility: {
            rangeDescription: 'Range: 1 to 10'
          }
        },

        yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1,
          accessibility: {
            rangeDescription: 'Range: 0.1 to 1000'
          }
        },

        tooltip: {
          headerFormat: '<b>{series.name}</b><br />',
          pointFormat: 'x = {point.x}, y = {point.y}',
          valueSuffix: ' €'
        },

        series: [{
          type: 'line',
          data: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512],
          pointStart: 1
        }]
      }} />
    </StyledApp>
  );
}

export default App;

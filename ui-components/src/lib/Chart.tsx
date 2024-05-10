
import Highcharts from 'highcharts'
import HighchartsReact, { HighchartsReactProps } from 'highcharts-react-official'

type ChartProps = HighchartsReactProps;

export const Chart = (props: ChartProps) => {
    const { options, ...rest } = props;
    const configuration = {
        ...options,
        chart: {
            height: 600
        },
    }
    return <HighchartsReact highcharts={Highcharts} options={configuration} {...rest} />
}
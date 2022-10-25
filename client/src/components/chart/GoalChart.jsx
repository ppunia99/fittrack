import { Chart as ChartJS, registerables } from 'chart.js'
import { Line } from 'react-chartjs-2'
import 'chartjs-adapter-date-fns'
import enGB from 'date-fns/locale'

const GoalChart = () => {
  return (
    <>
      <Container className="border border-secondary">
        <Row>
          <Line
            options={options}
            data={data}
            style={{ vh: 50 }}
            datasetIdKey="id"
          />
        </Row>
      </Container>
    </>
  )
}

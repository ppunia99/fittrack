import './yesterdayfactors.scss'
import { Row, Col } from 'react-bootstrap'

const YFactors = () => {
  return (
    <>
      <Row className="yestfactor-container flex-nowrap">
        <Col>
          <h6>Sleep</h6>
          <div className="text-body">
            <text>Hours: 7</text>
            <text>Quality: 8</text>
          </div>
        </Col>
        <Col>
          <h6>Calories</h6>
          <div className="text-body">
            <text>Protein: 150g</text>
            <text>Carbs: 170g</text>
            <text>Fat: 50g</text>
          </div>
        </Col>
        <Col>
          <h6>Water</h6>
          <div className="text-body">
            <text>OZ: 96</text>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default YFactors

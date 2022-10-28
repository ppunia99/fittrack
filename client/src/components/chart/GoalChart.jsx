import { Row, Col } from 'react-bootstrap'
import './goalchart.scss'

export const GoalChart = () => {
  return (
    <>
      <Row id="mainchange" className="flex-nowrap">
        <Col>
          <h5 className="title">
            <b>Chest</b>
          </h5>
        </Col>
        <Col>
          <h5 className="title">
            <b>Tri</b>
          </h5>
        </Col>
        <Col>
          <h5 className="title">
            <b>Back</b>
          </h5>{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Bicep</b>
          </h5>{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Legs</b>
          </h5>{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Shoulders</b>
          </h5>{' '}
        </Col>
      </Row>
    </>
  )
}

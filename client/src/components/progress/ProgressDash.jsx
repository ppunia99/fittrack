import { Row, Col } from 'react-bootstrap'
import { Chest } from '../workouts/Chest'
import { Back } from '../workouts/Back'
import { Tri } from '../workouts/Tri'
import { Bicep } from '../workouts/Bicep'
import { Legs } from '../workouts/Legs'
import { Shoulders } from '../workouts/Shoulders'
import './progress.scss'

export const ProgressDash = () => {
  return (
    <>
      <Row id="progress-dash">
        <div className="cards">
          <h5 class="text-center">Strength</h5>
          <h6>Overall % Change: 2% </h6>
        </div>
        <div className="cards">
          <h5 class="text-center">Weight</h5>
          <h6>Overall % Change: </h6>
        </div>
      </Row>
    </>
  )
}

export const MainProgress = () => {
  return (
    <>
      <Row id="main-progress" className="flex-nowrap">
        <Col>
          <h5 className="title">
            <b>Chest</b>
          </h5>
          <Chest />
        </Col>
        <Col>
          <h5 className="title">
            <b>Tri</b>
          </h5>
          <Tri />
        </Col>
        <Col>
          <h5 className="title">
            <b>Back</b>
          </h5>{' '}
          <Back />{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Bicep</b>
          </h5>{' '}
          <Bicep />{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Legs</b>
          </h5>{' '}
          <Legs />{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Shoulders</b>
          </h5>{' '}
          <Shoulders />{' '}
        </Col>
      </Row>
    </>
  )
}

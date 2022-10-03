import './App.scss'
import MainNav from './components/homenav/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Schedule from './components/schedule/Schedule'
import { Row, Col } from 'react-bootstrap'
import YFactors from './components/factors/yesterdayfactors'
import { MainProgress, ProgressDash } from './components/progress/ProgressDash'

function App() {
  return (
    <>
      <div id="nav-container">
        <MainNav />
      </div>
      <div id="body-container">
        <Row class="d-flex justify-content-center align-items-center">
          <Col>
            <YFactors />
          </Col>
          <Col className="d-flex justify-content-center">
            <Schedule />
          </Col>
          <Col>
            <ProgressDash />
          </Col>
        </Row>
        <Row>
          <Col>
            <MainProgress />
          </Col>
          <Col> </Col>
        </Row>
      </div>
    </>
  )
}

export default App

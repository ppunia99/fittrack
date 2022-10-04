import { useState, setState } from 'react'
import { Row, Col, Dropdown, DropdownButton, NavItem } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { MiniChest } from '../workouts/Chest.jsx'
import { MiniTri } from '../workouts/Tri.jsx'
import { MiniBack } from '../workouts/Back.jsx'
import { MiniBicep } from '../workouts/Bicep.jsx'
import { MiniLegs } from '../workouts/Legs.jsx'
import { MiniShoulders } from '../workouts/Shoulders.jsx'
import './schedule.scss'
const Schedule = (event) => {
  const [monday, setMonday] = useState('Select Workout')
  const [tuesday, setTuesday] = useState('Select Workout')
  const [wednesday, setWednesday] = useState('Select Workout')
  const [thursday, setThursday] = useState('Select Workout')
  const [friday, setFriday] = useState('Select Workout')
  const [saturday, setSaturday] = useState('Select Workout')
  const [sunday, setSunday] = useState('Select Workout')

  const choice = () => {
    const chestmon = document.getElementById('chestmon')
    const backmon = document.getElementById('backmon')
    const legsmon = document.getElementById('legsmon')
    chestmon.onclick = function () {
      setMonday('Chest/Tri')
    }
    backmon.onclick = function () {
      setMonday('Back/Bi')
    }
    legsmon.onclick = function () {
      setMonday('Legs/Shoulders')
    }
    const chesttue = document.getElementById('chesttue')
    const backtue = document.getElementById('backtue')
    const legstue = document.getElementById('legstue')
    chesttue.onclick = function () {
      console.log('function entered')
      setTuesday('Chest/Tri')
    }
    backtue.onclick = function () {
      setTuesday('Back/Bi')
    }
    legstue.onclick = function () {
      setTuesday('Legs/Shoulders')
    }
    const chestwed = document.getElementById('chestwed')
    const backwed = document.getElementById('backwed')
    const legswed = document.getElementById('legswed')
    chestwed.onclick = function () {
      setWednesday('Chest/Tri')
    }
    backwed.onclick = function () {
      setWednesday('Back/Bi')
    }
    legswed.onclick = function () {
      setWednesday('Legs/Shoulders')
    }
    const chestthur = document.getElementById('chestthur')
    const backthur = document.getElementById('backthur')
    const legsthur = document.getElementById('legsthur')
    chestthur.onclick = function () {
      setThursday('Chest/Tri')
    }
    backthur.onclick = function () {
      setThursday('Back/Bi')
    }
    legsthur.onclick = function () {
      setThursday('Legs/Shoulders')
    }
    const chestfri = document.getElementById('chestfri')
    const backfri = document.getElementById('backfri')
    const legsfri = document.getElementById('legsfri')
    chestfri.onclick = function () {
      setFriday('Chest/Tri')
    }
    backfri.onclick = function () {
      setFriday('Back/Bi')
    }
    legsfri.onclick = function () {
      setFriday('Legs/Shoulders')
    }
    const chestsat = document.getElementById('chestsat')
    const backsat = document.getElementById('backsat')
    const legssat = document.getElementById('legssat')
    chestsat.onclick = function () {
      setSaturday('Chest/Tri')
    }
    backsat.onclick = function () {
      setSaturday('Back/Bi')
    }
    legssat.onclick = function () {
      setSaturday('Legs/Shoulders')
    }
    const chestsun = document.getElementById('chestsun')
    const backsun = document.getElementById('backsun')
    const legssun = document.getElementById('legssun')
    chestsun.onclick = function () {
      setSunday('Chest/Tri')
    }
    backsun.onclick = function () {
      setSunday('Back/Bi')
    }
    legssun.onclick = function () {
      setSunday('Legs/Shoulders')
    }
  }

  return (
    <>
      <Row className="schedule-container flex-nowrap">
        <Col>
          {' '}
          <h6 className="text-center">Monday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {monday}{' '}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chestmon">Chest/Tri</DropdownItem>
                <DropdownItem id="backmon">Back/Bi</DropdownItem>
                <DropdownItem id="legsmon">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>
          {monday === 'Chest/Tri' && <MiniChest />}
          {monday === 'Chest/Tri' && <MiniTri />}
          {monday === 'Back/Bi' && <MiniBack />}
          {monday === 'Back/Bi' && <MiniBicep />}
          {monday === 'Legs/Shoulders' && <MiniLegs />}
          {monday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
        <Col>
          <h6 className="text-center">Tuesday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {tuesday}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chesttue">Chest/Tri</DropdownItem>
                <DropdownItem id="backtue">Back/Bi</DropdownItem>
                <DropdownItem id="legstue">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>
          {tuesday === 'Chest/Tri' && <MiniChest />}
          {tuesday === 'Chest/Tri' && <MiniTri />}
          {tuesday === 'Back/Bi' && <MiniBack />}
          {tuesday === 'Back/Bi' && <MiniBicep />}
          {tuesday === 'Legs/Shoulders' && <MiniLegs />}
          {tuesday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
        <Col>
          <h6 className="text-center">Wednesday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {wednesday}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chestwed">Chest/Tri</DropdownItem>
                <DropdownItem id="backwed">Back/Bi</DropdownItem>
                <DropdownItem id="legswed">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>
          {wednesday === 'Chest/Tri' && <MiniChest />}
          {wednesday === 'Chest/Tri' && <MiniTri />}
          {wednesday === 'Back/Bi' && <MiniBack />}
          {wednesday === 'Back/Bi' && <MiniBicep />}
          {wednesday === 'Legs/Shoulders' && <MiniLegs />}
          {wednesday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
        <Col>
          <h6 className="text-center">Thursday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {thursday}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chestthur">Chest/Tri</DropdownItem>
                <DropdownItem id="backthur">Back/Bi</DropdownItem>
                <DropdownItem id="legsthur">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>
          {thursday === 'Chest/Tri' && <MiniChest />}
          {thursday === 'Chest/Tri' && <MiniTri />}
          {thursday === 'Back/Bi' && <MiniBack />}
          {thursday === 'Back/Bi' && <MiniBicep />}
          {thursday === 'Legs/Shoulders' && <MiniLegs />}
          {thursday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
        <Col>
          {' '}
          <h6 className="text-center">Friday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {friday}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chestfri">Chest/Tri</DropdownItem>
                <DropdownItem id="backfri">Back/Bi</DropdownItem>
                <DropdownItem id="legsfri">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>{' '}
          {friday === 'Chest/Tri' && <MiniChest />}
          {friday === 'Chest/Tri' && <MiniTri />}
          {friday === 'Back/Bi' && <MiniBack />}
          {monday === 'Back/Bi' && <MiniBicep />}
          {friday === 'Legs/Shoulders' && <MiniLegs />}
          {friday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
        <Col>
          {' '}
          <h6 className="text-center">Saturday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {saturday}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chestsat">Chest/Tri</DropdownItem>
                <DropdownItem id="backsat">Back/Bi</DropdownItem>
                <DropdownItem id="legssat">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>{' '}
          {saturday === 'Chest/Tri' && <MiniChest />}
          {saturday === 'Chest/Tri' && <MiniTri />}
          {saturday === 'Back/Bi' && <MiniBack />}
          {saturday === 'Back/Bi' && <MiniBicep />}
          {saturday === 'Legs/Shoulders' && <MiniLegs />}
          {saturday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
        <Col>
          {' '}
          <h6 className="text-center">Sunday</h6>
          <Dropdown onClick={choice}>
            <DropdownToggle
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {sunday}
              <DropdownMenu aria-labelledby="dropdownMenuButton1">
                <DropdownItem id="chestsun">Chest/Tri</DropdownItem>
                <DropdownItem id="backsun">Back/Bi</DropdownItem>
                <DropdownItem id="legssun">Legs/Shoulders</DropdownItem>
              </DropdownMenu>
            </DropdownToggle>
          </Dropdown>{' '}
          {sunday === 'Chest/Tri' && <MiniChest />}
          {sunday === 'Chest/Tri' && <MiniTri />}
          {sunday === 'Back/Bi' && <MiniBack />}
          {sunday === 'Back/Bi' && <MiniBicep />}
          {sunday === 'Legs/Shoulders' && <MiniLegs />}
          {sunday === 'Legs/Shoulders' && <MiniShoulders />}
        </Col>
      </Row>
    </>
  )
}

export default Schedule

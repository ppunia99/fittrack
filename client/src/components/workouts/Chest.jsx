import './workouts.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const Chest = () => {
  //main one
  const [overallChest, setOverallChest] = useState()
  //

  const [flatBench, setFlatBench] = useState()
  const [inclinePressMachine, setInclinePressMachine] = useState()
  const [declinePressMachine, setDeclinePressMachine] = useState()
  const [pecFlies, setPecFlies] = useState()
  const [uprightDumbbellRaise, setUprightDumbellRaise] = useState()
  const [lowerChestFlies, setLowerChestFlies] = useState()

  window.localStorage.setItem('flatbench', flatBench)
  window.localStorage.setItem('inclinemachine', inclinePressMachine)
  window.localStorage.setItem('declinemachine', declinePressMachine)
  window.localStorage.setItem('pecflies', pecFlies)
  window.localStorage.setItem('upperchestdb', uprightDumbbellRaise)
  window.localStorage.setItem('lowerchestcable', lowerChestFlies)
  window.localStorage.setItem('overall', overallChest)

  const overallChestComputation = (event) => {
    event.preventDefault()
    const prevoverall =
      Number(
        parseInt(flatBench) +
          parseInt(inclinePressMachine) +
          parseInt(declinePressMachine) +
          parseInt(pecFlies) +
          parseInt(uprightDumbbellRaise) +
          parseInt(lowerChestFlies),
      ) / 6

    setOverallChest(prevoverall)
    axios
      .post('http://localhost:3000/chestInput', {
        weight: overallChest,
      })
      .then((response) => {
        alert('success!')
      })
  }

  const sendChest = () => {}

  return (
    <div id="progress-schedule">
      Overall Chest Change = {overallChest}
      <ul>
        <li className="mainli">
          <b>Flat Bench</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li>{' '}
            <li>
              {' '}
              Weight:
              <input
                placeholder="enter max weight"
                onChange={(event) => {
                  setFlatBench(event.target.value)
                }}
              />{' '}
              {flatBench}
            </li>
          </ul>
        </li>
        <li>
          <b>Incline press machine</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li>{' '}
            <li>
              {' '}
              Weight:{' '}
              <input
                placeholder="enter max weight"
                onChange={(event) => {
                  setInclinePressMachine(event.target.value)
                }}
              />{' '}
            </li>
          </ul>
        </li>
        <li>
          <b>Decline press machine</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li>{' '}
            <li>
              {' '}
              Weight:{' '}
              <input
                placeholder="enter max weight"
                onChange={(event) => {
                  setDeclinePressMachine(event.target.value)
                }}
              />
            </li>
          </ul>
        </li>
        <li>
          <b> Pec Flies</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li>{' '}
            <li>
              {' '}
              Weight:{' '}
              <input
                placeholder="enter max weight"
                onChange={(event) => {
                  setPecFlies(event.target.value)
                }}
              />
            </li>
          </ul>
        </li>
        <li>
          <b> Upright Dumbbell Raise</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li>{' '}
            <li>
              {' '}
              Weight:{' '}
              <input
                placeholder="enter max weight"
                onChange={(event) => {
                  setUprightDumbellRaise(event.target.value)
                }}
              />
            </li>
          </ul>{' '}
        </li>
        <li>
          <b> Lower Chest Flies</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li>{' '}
            <li>
              {' '}
              Weight:{' '}
              <input
                placeholder="enter max weight"
                onChange={(event) => {
                  setLowerChestFlies(event.target.value)
                }}
              />{' '}
            </li>
          </ul>
        </li>
      </ul>
      <input class="submit" type="submit" onClick={overallChestComputation} />
    </div>
  )
}

export const MiniChest = () => {
  return (
    <>
      <div className="minischedule">
        <ul>
          <li className="mainli">
            <b>Flat Bench</b>
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Incline press machine</b>
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Decline press machine</b>
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b> Pec Flies</b>
            <ul>
              <li>Sets: 2 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b> Upright Dumbbell Raise</b>
            <ul>
              <li>Sets: 2 </li> <li>reps: 8-10 </li>
            </ul>{' '}
          </li>
          <li>
            <b> Lower Chest Flies</b>
            <ul>
              <li>Sets: 2 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

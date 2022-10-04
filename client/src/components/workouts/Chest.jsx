import './workouts.scss'
import { useEffect, useState } from 'react'

export const Chest = () => {
  //main one
  const [overallChest, setOverallChest] = useState()
  //

  const [flatBench, setFlatBench] = useState(165)
  const [inclinePressMachine, setInclinePressMachine] = useState(185)
  const [declinePressMachine, setDeclinePressMachine] = useState(60)
  const [pecFlies, setPecFlies] = useState(100)
  const [uprightDumbbellRaise, setUprightDumbellRaise] = useState(30)
  const [lowerChestFlies, setLowerChestFlies] = useState(35)

  const overallComputation = () => {
    const overall =
      (flatBench +
        inclinePressMachine +
        declinePressMachine +
        pecFlies +
        uprightDumbbellRaise +
        lowerChestFlies) /
      6

    setOverallChest(overall)
  }

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
            <li> Weight: {inclinePressMachine}</li>
          </ul>
        </li>
        <li>
          <b>Decline press machine</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li>{' '}
            <li> Weight: {declinePressMachine}</li>
          </ul>
        </li>
        <li>
          <b> Pec Flies</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li> <li> Weight: {pecFlies}</li>
          </ul>
        </li>
        <li>
          <b> Upright Dumbbell Raise</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li>{' '}
            <li> Weight: {uprightDumbbellRaise}</li>
          </ul>{' '}
        </li>
        <li>
          <b> Lower Chest Flies</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li>{' '}
            <li> Weight: {lowerChestFlies}</li>
          </ul>
        </li>
      </ul>
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
        <button
          className="btn-primary"
          type="submit"
          onClick="overallComputation"
        >
          Submit
        </button>
      </div>
    </>
  )
}

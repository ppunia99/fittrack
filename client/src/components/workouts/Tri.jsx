import { useState } from 'react'
import axios from 'axios'

export const Tri = () => {
  const [exercieseOne, setExerciseOne] = useState()
  const [exerciseTwo, setExerciseTwo] = useState()
  const [exerciseThree, setExerciseThree] = useState()
  const [exerciseFour, setExerciseFour] = useState()
  const [exerciseFive, setExerciseFive] = useState()
  const [overall, setOverall] = useState()

  const overallComputation = (event) => {
    event.preventDefault()
    const prevoverall =
      Number(
        parseInt(exercieseOne) +
          parseInt(exerciseTwo) +
          parseInt(exerciseThree) +
          parseInt(exerciseFour) +
          parseInt(exerciseFive),
      ) / 5

    setOverall(prevoverall)
    axios
      .post('http://localhost:3000/tricepInput', {
        strength: overall,
      })
      .then((response) => {
        alert('success!')
      })
  }

  return (
    <div id="progress-schedule">
      Overall Tricep: {overall}
      <h6>
        <ul>
          <li>
            <b> Rope Pull Down </b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  placeholder=""
                  onChange={(event) => {
                    setExerciseOne(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b> Rope Sword Raises </b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  placeholder=""
                  onChange={(event) => {
                    setExerciseTwo(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b> Rope Overhead Extension</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  placeholder=""
                  onChange={(event) => {
                    setExerciseThree(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b> Single Arm Cable Pull Down</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  placeholder=""
                  onChange={(event) => {
                    setExerciseFour(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b> Tricep Pushdown Machine</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  placeholder=""
                  onChange={(event) => {
                    setExerciseFive(event.target.value)
                  }}
                />{' '}
              </li>
            </ul>
          </li>
        </ul>
      </h6>
      <button class="submit" type="submit" onClick={overallComputation}>
        Submit
      </button>{' '}
    </div>
  )
}

export const MiniTri = () => {
  return (
    <div className="minischedule">
      <h6>
        <ul>
          <li>
            <b>Rope Pull Down </b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Sword Raises Rope</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Overhead Rope Tricep Extension </b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Single Arm Cable Pulldown </b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
        </ul>
      </h6>
    </div>
  )
}

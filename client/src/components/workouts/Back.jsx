import { useState } from 'react'

export const Back = () => {
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
  }
  return (
    <div id="progress-schedule">
      Overall Back Change: {overall}
      <ul>
        <li>
          <b>Lat PullDown</b>
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
          <b>Machine Row</b>
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
          <b>Straight Arm Lat Pull Down</b>
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
          <b>Bent Over Row</b>
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
          <b>Lat Pull Down Single Arm</b>
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
              />
            </li>
          </ul>
        </li>
        <li>
          <b>DeadLift</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li> <li> Weight: </li>
          </ul>
        </li>
      </ul>
      <button class="submit" type="submit" onClick={overallComputation}>
        Submit
      </button>{' '}
    </div>
  )
}

export const MiniBack = () => {
  return (
    <div className="minischedule">
      <ul>
        <li>
          <b>Lat PullDown</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li>
          </ul>
        </li>
        <li>
          <b>Machine Row</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li>
          </ul>
        </li>
        <li>
          <b>Straight Arm Lat Pull Down</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li>
          </ul>
        </li>
        <li>
          <b>Bent Over Row</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li>
          </ul>
        </li>
        <li>
          <b>Lat Pull Down Single Arm</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li>
          </ul>
        </li>
        <li>
          <b>DeadLift</b>
          <ul>
            <li>Sets: 3 </li> <li>reps: 8-10 </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

import { useState } from 'react'

export const Shoulders = () => {
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
      Overall Shoulders: {overall}
      <h6>
        <ul>
          <li>
            <b>Dumbell Lateral Flies</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  onChange={(event) => {
                    setExerciseOne(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b>Straight Arm Raises</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  onChange={(event) => {
                    setExerciseTwo(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b>Shoulder Machine Press</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  onChange={(event) => {
                    setExerciseThree(event.target.value)
                  }}
                />
              </li>
            </ul>
          </li>
          <li>
            <b>Face Pulls </b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
              <li>
                {' '}
                Weight:{' '}
                <input
                  onChange={(event) => {
                    setExerciseFive(event.target.value)
                  }}
                />
              </li>
              <li>
                <b>Rear Delt Machine Flies</b>{' '}
                <ul>
                  <li>Sets: 3 </li> <li>reps: 8-10 </li>{' '}
                  <li>
                    {' '}
                    Weight:{' '}
                    <input
                      onChange={(event) => {
                        setExerciseFour(event.target.value)
                      }}
                    />
                  </li>
                </ul>
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

export const MiniShoulders = () => {
  return (
    <div className="minischedule">
      <h6>
        <ul>
          <li>
            <b>Dumbell Lateral Flies</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Straight Arm Raises</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Shoulder Machine Press</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
        </ul>
      </h6>
    </div>
  )
}

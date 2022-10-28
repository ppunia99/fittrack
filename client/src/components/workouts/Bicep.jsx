import { useState } from 'react'

export const Bicep = () => {
  const [exercieseOne, setExerciseOne] = useState()
  const [exerciseTwo, setExerciseTwo] = useState()
  const [exerciseThree, setExerciseThree] = useState()
  const [overall, setOverall] = useState()

  const overallComputation = (event) => {
    event.preventDefault()
    const prevoverall =
      Number(
        parseInt(exercieseOne) +
          parseInt(exerciseTwo) +
          parseInt(exerciseThree),
      ) / 3

    setOverall(prevoverall)
  }
  return (
    <div id="progress-schedule">
      Overall Bicep: {overall}
      <h6>
        <ul>
          <li>
            <b>Barbell Curl</b>{' '}
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
            <b>Hammer Curl</b>{' '}
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
            <b>Concentrated Curls</b>{' '}
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
        </ul>
      </h6>
      <button class="submit" type="submit" onClick={overallComputation}>
        Submit
      </button>{' '}
    </div>
  )
}

export const MiniBicep = () => {
  return (
    <div className="minischedule">
      <h6>
        <ul>
          <li>
            <b>Barbell Curl</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Hammer Curl</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
          <li>
            <b>Concentrated Curls</b>{' '}
            <ul>
              <li>Sets: 3 </li> <li>reps: 8-10 </li>
            </ul>
          </li>
        </ul>
      </h6>
    </div>
  )
}

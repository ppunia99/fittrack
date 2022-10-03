import './workouts.scss'

export const Chest = () => {
  return (
    <div id="progress-schedule">
      <ul>
        <li className="mainli">
          <b>Flat Bench</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li> <li> Weight: </li>
          </ul>
        </li>
        <li>
          <b>Incline press machine</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li> <li> Weight: </li>
          </ul>
        </li>
        <li>
          <b>Decline press machine</b>
          <ul>
            <li>Sets: 3 </li> <li>Reps: 8-10 </li> <li> Weight: </li>
          </ul>
        </li>
        <li>
          <b> Pec Flies</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li> <li> Weight: </li>
          </ul>
        </li>
        <li>
          <b> Upright Dumbbell Raise</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li> <li> Weight: </li>
          </ul>{' '}
        </li>
        <li>
          <b> Lower Chest Flies</b>
          <ul>
            <li>Sets: 2 </li> <li>Reps: 8-10 </li> <li> Weight: </li>
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
      </div>
    </>
  )
}

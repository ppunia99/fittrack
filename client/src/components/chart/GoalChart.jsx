import { Row, Col } from 'react-bootstrap'
import './goalchart.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export const GoalChart = () => {
  const getChest = '/getChest'
  const getBack = '/getBack'
  const getShoulders = '/getShoulders'
  const getTricep = '/getTricep'
  const getLegs = '/getLegs'
  const getBicep = '/getBicep'
  const [strength, setStrength] = useState()
  const [get, setGet] = useState()
  const [test, setTest] = useState()

  useEffect(() => {
    makeRequest()
  }, [])

  const url = 'http://localhost:3000'
  // const [bullet, setBullet] = useState(test)

  // const checkGetRequest = () => {
  //   if (get === getChest) {
  //     setStrength(url + getChest)
  //   } else if (get === getBack) {
  //     setStrength(url + getBack)
  //   } else if (get === getShoulders) {
  //     setStrength(url + getShoulders)
  //   } else if (get === getBicep) {
  //     setStrength(url + getBicep)
  //   } else if (get === getTricep) {
  //     setStrength(url + getTricep)
  //   } else if (get === getLegs) {
  //     setStrength(url + getLegs)
  //   }
  // }

  const makeRequest = async () => {
    await axios.get('http://localhost:3000/getChest').then((res) => {
      let x = res.data.content
      return x
      alert('Retrieved Successfully!')
    })
  }

  const handleChest = () => {
    // setBullet([...bullet, { test }])
  }

  return (
    <>
      <Row id="mainchange" className="flex-nowrap">
        <Col>
          <h5 className="title">
            <b>{test}</b>
          </h5>
          {/* {bullet.map((oneBullet, index) => (
            <>
              <ul>
                <li key={index}></li>
              </ul>
              {bullet.length - 1 === index && bullet.length < 24 && (
                <button onClick={handleChest}>click</button>
              )}
            </>
          ))} */}
        </Col>
        <Col>
          <h5 className="title">
            <b>Tri</b>
          </h5>
        </Col>
        <Col>
          <h5 className="title">
            <b>Back</b>
          </h5>{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Bicep</b>
          </h5>{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Legs</b>
          </h5>{' '}
        </Col>
        <Col>
          <h5 className="title">
            <b>Shoulders</b>
          </h5>{' '}
        </Col>
      </Row>
    </>
  )
}

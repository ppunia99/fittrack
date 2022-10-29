const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {
  ChestCalc,
  BackCalc,
  TricepCalc,
  LegsCalc,
  BicepCalc,
  ShouldersCalc,
} = require('./models/Chest')

const cors = require('cors')
app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://ppunia:ppunia@fittrack.lvibdpj.mongodb.net/fittrack?retryWrites=true&w=majority',
)

/////////
app.get('/getChest', (req, res) => {
  ChestCalc.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/chestInput', async (req, res) => {
  const chestStrength = req.body
  const updateChest = new ChestCalc(chestStrength)
  await updateChest.save()
  res.json(chestStrength)
})

///////
app.get('/getBack', (req, res) => {
  BackCalc.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/backInput', async (req, res) => {
  const backStrength = req.body
  const updateBack = new BackCalc(backStrength)
  await updateBack.save()
  res.json(backStrength)
})

///////

app.get('/getTricep', (req, res) => {
  TricepCalc.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/tricepInput', async (req, res) => {
  const tricepStrength = req.body
  const updateTricep = new TricepCalc(tricepStrength)
  await updateTricep.save()
  res.json(tricepStrength)
})

/////////

app.get('/getBicep', (req, res) => {
  BicepCalc.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/bicepInput', async (req, res) => {
  const bicepStrength = req.body
  const updateBicep = new BicepCalc(bicepStrength)
  await updateBicep.save()
  res.json(bicepStrength)
})

/////////

app.get('/getLegs', (req, res) => {
  LegsCalc.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/legsInput', async (req, res) => {
  const legsStrength = req.body
  const updateLegs = new LegsCalc(legsStrength)
  await updateLegs.save()
  res.json(legsStrength)
})

/////////

app.get('/getShoulders', (req, res) => {
  ShouldersCalc.find({}, (err, result) => {
    if (err) {
      res.json(err)
    } else {
      res.json(result)
      console.log('returned', result)
    }
  })
})

app.post('/shouldersInput', async (req, res) => {
  const shoulderStrength = req.body
  const updateShoulders = new ShouldersCalc(shoulderStrength)
  await updateShoulders.save()
  res.json(shoulderStrength)
})

/////////

app.listen(3000, () => {
  console.log('SERVER IS RUNNING!')
})

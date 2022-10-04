const express = require('express')
const app = express()
const mongoose = require('mongoose')
const ChestModel = require('./models/Chest')

const cors = require('cors')
app.use(express.json())
app.use(cors())

mongoose.connect(
  'mongodb+srv://ppunia:ppunia@fittrack.lvibdpj.mongodb.net/fittrack?retryWrites=true&w=majority',
)

app.get('/getChest', (req, res) => {
  ChestModel.find({}, (err, result) => {
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
  const updateChest = new ChestModel(chestStrength)
  await updateChest.save()
  res.json(chestStrength)
})

app.listen(3000, () => {
  console.log('SERVER IS RUNNING!')
})

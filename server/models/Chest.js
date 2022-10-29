const mongoose = require('mongoose')

const StrengthSchema = new mongoose.Schema({
  strength: {
    type: Number,
    required: true,
  },
})

const ChestCalc = mongoose.model('fittrack', StrengthSchema, 'chest')
const BackCalc = mongoose.model('fittrack', StrengthSchema, 'back')
const TricepCalc = mongoose.model('fittrack', StrengthSchema, 'tricep')
const LegsCalc = mongoose.model('fittrack', StrengthSchema, 'legs')
const BicepCalc = mongoose.model('fittrack', StrengthSchema, 'bicep')
const ShouldersCalc = mongoose.model('fittrack', StrengthSchema, 'shoulders')

module.exports = {
  ChestCalc,
  BackCalc,
  TricepCalc,
  LegsCalc,
  BicepCalc,
  ShouldersCalc,
}

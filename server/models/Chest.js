const mongoose = require('mongoose')

const ChestSchema = new mongoose.Schema({
  weight: {
    type: Number,
    required: true,
  },
})

const ChestModel = mongoose.model('fittrack', ChestSchema, 'chest')
module.exports = ChestModel

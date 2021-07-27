
const mongoose = require("mongoose");
const Connect = async() => {
  try {
    await mongoose
    .connect('mongodb://localhost:27017/Person', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('success! connected to MongoDB ATLAS')
  } catch (error) {
    console.log('error connecting to MongoDB ATLAS:', error.message)
  }
}
module.exports = Connect;
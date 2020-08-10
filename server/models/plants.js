const mongoose = require('./index');
const Schema = mongoose.Schema;

const PlantSchema = new Schema({
  scientificName: { type: String, required: false },
  commonName: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: { type: String, required: true },
  light: { type: String, required: true },
  water: { type: String, required: true },
  humidity: { type: String, required: true },
  airPurifying: { type: Boolean, required: true },
  imgUrl: { type: String, required: true },
});

module.exports = mongoose.model('Plants', PlantSchema);

const mongoose = require('./index');
const Schema = mongoose.Schema;

const UserPlantSchema = new Schema({
  nickName: { type: String, required: true },
  commonName: { type: String, required: true },
  lastWatered: { type: Date, required: true },
  bought: { type: Date, required: true },
  plantInfo: { type: Schema.Types.ObjectId, ref: "Plants" },
})

const UserPlants = mongoose.model('UserPlants', UserPlantSchema);

async function getAllUserPlants() {
  return await UserPlants.find()
    .populate({ path: 'plantInfo' });
}

async function createUserPlant(req) {
  return await UserPlants.create({
    nickName: req.body.nickName,
    commonName: req.body.commonName,
    lastWatered: req.body.lastWatered,
    bought: req.body.bought,
    plantInfo: req.body.id
  })
}

async function getUserPlantById(id) {
  return await UserPlants.findOne({ _id: id })
    .populate({ path: 'plantInfo' })
}

async function deleteUserPlantById(id) {
  return await UserPlants.findByIdAndDelete({ _id: id });
}

async function updateUserPlant(userPlantId, updateParams) {
  return await UserPlants.findOneAndUpdate(
    { _id: userPlantId },
    updateParams,
    { new: true }
  );
}


module.exports = {
  UserPlants,
  getAllUserPlants,
  createUserPlant,
  getUserPlantById,
  deleteUserPlantById,
  updateUserPlant
}
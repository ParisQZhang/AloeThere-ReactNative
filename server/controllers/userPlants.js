const { getAllUserPlants,
  createUserPlant,
  getUserPlantById,
  updateUserPlant,
  deleteUserPlantById, } = require('../models/userPlants');

exports.getUserPlants = async (req, res) => {
  try {
    const plants = await getAllUserPlants()
    res.status(200).json(plants);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postUserPlant = async (req, res) => {
  try {
    const plant = await createUserPlant(req);
    const newplant = await getUserPlantById(plant._id)
    res.status(201);
    res.json(newplant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

exports.getUserPlant = async (req, res) => {
  try {
    const plant = await getUserPlantById(req.params.id)
    res.status(200);
    res.json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

exports.deleteUserPlant = async (req, res) => {
  try {
    await deleteUserPlantById(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

function buildUserPlantUpdateParams(nickname, boughtDate, lastWatered) {
  return {
    ...(nickname && { nickname }),
    ...(boughtDate && { boughtDate }),
    ...(lastWatered && { lastWatered })
  }
}

exports.editUserPlant = async (req, res) => {
  const updateParams = buildUserPlantUpdateParams(req.body.nickName, req.body.bought, req.body.lastWatered)

  try {
    const plant = await updateUserPlant(req.body.id, updateParams)
    console.log(req.body.id);
    res.status(200);
    res.json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

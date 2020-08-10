const Plants = require('../models/plants');

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plants.find();
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

exports.postPlant = async (req, res) => {
  try {
    const plant = await Plants.create({
      scientificName: req.body.scientificName,
      commonName: req.body.commonName,
      type: req.body.type,
      difficulty: req.body.difficulty,
      light: req.body.light,
      water: req.body.water,
      humidity: req.body.humidity,
      airPurifying: req.body.airPurifying,
      imgUrl: req.body.imgUrl,
    });

    res.status(201).json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}


function buildPlantUpdateParams(type, light) {
  return {
    ...(type && { type }),
    ...(light && { light })
  }
}

exports.editPlant = async (req, res) => {
  const updateParams = buildPlantUpdateParams(req.body.type, req.body.light)

  try {
    const plant = await Plants.findOneAndUpdate(
      { _id: req.params.id },
      updateParams,
      { new: true }
    );
    res.status(200);
    res.json(plant);
  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
}

exports.searchPlants = async (req, res) => {
  try {
    let searchWord = req.query.q;
    const plants = await Plants.findOne(
      { "commonName": new RegExp(searchWord, "i") }
    );
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};

function buildUserPlantFilterParams(difficulty, light, humidity, water, airPurifying, type) {
  return {
    ...(difficulty && { 'difficulty': new RegExp(difficulty) }),
    ...(light && { 'light': new RegExp(light) }),
    ...(humidity && { 'humidity': new RegExp(humidity) }),
    ...(water && { 'water': new RegExp(water) }),
    ...(airPurifying && { 'airPurifying': airPurifying }),
    ...(type && { 'type': new RegExp(type) }),
  }
}

exports.filterPlants = async (req, res) => {
  try {
    const filterParams = buildUserPlantFilterParams(
      req.query.difficulty,
      req.query.light,
      req.query.humidity,
      req.query.water,
      req.query.airPurifying,
      req.query.type);
    console.log(filterParams)
    const plants = await Plants.find(filterParams);
    res.status(200);
    res.json(plants);

  } catch (error) {
    console.error(error); //eslint-disable-line
    res.sendStatus(500);
  }
};
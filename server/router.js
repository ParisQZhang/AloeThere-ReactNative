const Router = require('express');
const router = Router();
const plantController = require('./controllers/plants');
const userPlantController = require('./controllers/userPlants');
const subscriptionHandler = require('./subscriptionHandler')

router.get('/plants', plantController.getPlants);
router.post('/plants', plantController.postPlant);
router.put('/plants/:id', plantController.editPlant);
router.get('/plants/search', plantController.searchPlants);
router.get('/plants/filter', plantController.filterPlants);

router.post('/myplants', userPlantController.postUserPlant);
router.get('/myplants', userPlantController.getUserPlants);
router.get('/myplants/:id', userPlantController.getUserPlant);
router.delete('/myplants/:id', userPlantController.deleteUserPlant);
router.put('/myplants', userPlantController.editUserPlant);

router.post("/subscription", subscriptionHandler.handlePushNotificationSubscription);
router.get("/subscription/:id", subscriptionHandler.sendPushNotification);

module.exports = router;
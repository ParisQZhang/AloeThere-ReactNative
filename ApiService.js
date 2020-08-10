const BASE_URL = 'http://localhost:3001';

function getPlants() {
  return fetch(BASE_URL + '/plants').then((response) => response.json());
}

function getMyPlants() {
  return fetch(BASE_URL + '/myplants')
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

function postMyPlant(data) {
  return fetch(BASE_URL + '/myplants', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function getFilterPlants(
  difficulty,
  type,
  light,
  water,
  humidity,
  airPurifying
) {
  return fetch(
    `${BASE_URL}/plants/filter/?difficulty=${difficulty}&type=${type}&light=${light}&water=${water}&humidity=${humidity}&airPurifying=${airPurifying}`
  ).then((response) => response.json());
}

function editMyPlant(data) {
  return fetch(BASE_URL + '/myplants', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

function deleteMyPlant(id) {
  return fetch(`${BASE_URL}/myplants/${id}`, {
    method: 'DELETE',
  });
}

export default {
  getPlants,
  getMyPlants,
  postMyPlant,
  getFilterPlants,
  editMyPlant,
  deleteMyPlant,
};

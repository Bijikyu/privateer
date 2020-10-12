const BASE_URL = '/api/privateers';

export function create(priv) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(priv)
  }).then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
  }

export function update(priv) {
  return fetch(`${BASE_URL}/${priv._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(priv)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}
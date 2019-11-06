//method for - `GET /api/schemes/`
function find() {
  return db("schemes");
}

//method for GET /api/schemes/:id
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

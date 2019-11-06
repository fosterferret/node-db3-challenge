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

//method for getting all steps for a given scheme, ordered correctly
function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .select("steps.id", "scheme_name", "step_number", "instructions")
    .where({ scheme_id: id })
    .orderBy("step_number");
}

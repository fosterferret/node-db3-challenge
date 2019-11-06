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

//method for adding a schema
function add(schema) {
  return db("schemes")
    .insert(schema)
    .then(ids => findById(ids[0]));
}

//method for updating a given schema
function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes)
    .then(count => findById(id));
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}

function addStep(step, schemeId) {
  return db("steps")
    .insert({ ...step, schemeId })
    .then(id => {
      return db("steps").where({ id: id[0] });
    });
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
}
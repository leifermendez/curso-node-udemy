const handleHttpError = (res, error) => {
  console.log("Error", error);
  res.status(500)
  res.send({error:'ERROR'})
};

module.exports = { handleHttpError };

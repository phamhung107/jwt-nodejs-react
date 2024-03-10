const testApi = (req, res) => {
  return res.status(200).send("Test API success");
};
module.exports = { testApi };

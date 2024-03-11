const testApi = (req, res) => {
  return res.status(200).send("Test API success");
};

const handleRegister = (req, res) => {
  console.log("ok", req.body);
};

module.exports = { testApi, handleRegister };

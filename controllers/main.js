const login = async (req, res) => {
  res.send('Fake Login/Register/Singup Route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, Adnan`,
    secret: `Here is your authorized data, your lucky numbrer is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};

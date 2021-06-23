const Sequelize = require("sequelize");
const sequelize = require("./db_instance");

const position = sequelize.define(
    "account",
    {
      // attributes
      username: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      // options
    }
  );
  

(async () => {
  await position.sync({ force: false });    
})();

module.exports = position;

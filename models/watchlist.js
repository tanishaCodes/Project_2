module.exports = function(sequelize, DataTypes) {
  var Watchlist = sequelize.define("Watchlist", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Watchlist;
};

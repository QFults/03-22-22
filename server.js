const { Sequelize, Model, DataTypes } = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost/favorites_db')

class Game extends Model { }

Game.init({
  name: DataTypes.STRING,
  category: DataTypes.STRING
}, { sequelize, modelName: 'game' })

class Movie extends Model { }

Movie.init({
  title: DataTypes.STRING,
  year: DataTypes.INTEGER
}, { sequelize, modelName: 'movie' })

class Song extends Model { }

Song.init({
  title: DataTypes.STRING,
  album: DataTypes.STRING
}, { sequelize, modelName: 'song' })

class Food extends Model { }

Food.init({
  name: DataTypes.STRING,
  cuisine: DataTypes.STRING
}, { sequelize, modelName: 'foods' })

sequelize.sync({ force: true })
  .then(() => console.log('Connected to MySQL DB'))

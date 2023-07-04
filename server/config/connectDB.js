const { Sequelize } = require('sequelize');

//exports.sequelize = new Sequelize("postgres://alan:5pQRvPbH7eOUlAhdHCU3Y8kODMHjJTNE@dpg-ciflubtph6erq6gaok2g-a.oregon-postgres.render.com/testdb_ibw9")
//exports.sequelize = new Sequelize("postgres://alan:5pQRvPbH7eOUlAhdHCU3Y8kODMHjJTNE@dpg-ciflubtph6erq6gaok2g-a/testdb_ibw9")

exports.sequelize = new Sequelize(process.env.DATABASE_URL)

/* exports.sequelize = new Sequelize('testdb_ibw9', 'alan', '5pQRvPbH7eOUlAhdHCU3Y8kODMHjJTNE', {
    host: 'dpg-ciflubtph6erq6gaok2g-a.oregon-postgres.render.com',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000,
    },
    logging: false,
    ssl: true
})  */

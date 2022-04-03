const mongoose = require("mongoose");

const dbName = "cubes";
const connectionString = `mongodb://localhost:27017/${dbName}`;

async function mongooseConnection(app) {
    try {
        await mongoose.connect(connectionString);

        console.log("Database connected!");

        mongoose.connection.on("error", (err) => {
            console.log("Database error");
            console.log(err);
        });
    } catch (err) {
        console.log("Error connecting to database");
        process.exit(1);
    }
}

module.exports = mongooseConnection;
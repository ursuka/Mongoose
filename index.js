const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/movieApp');
    console.log("WE are in!")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
    name: String,
    year: Number,
    score: Number,
    rating: String  
})

const Movie = mongoose.model("Movie", movieSchema);

const amadeous = new Movie({name: "amadeous", year: 1989, score: 9.6, rating: "R" })
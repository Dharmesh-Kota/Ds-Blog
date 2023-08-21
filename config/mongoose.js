const mongoose = require("mongoose");
const db = mongoose.connection;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://dharmeshkota123:D_Kota-14@cluster0.i612v0k.mongodb.net/?retryWrites=true&w=majority`);
  console.log("Successlly Connected to Database...!");
}

// module.exports = db;

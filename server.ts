import mongoose from "mongoose"

// Connect to mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/car_store")
	.then(_=>console.log('mongodb connected!'))
	.catch(err=>console.log(err))

// DEFINE SCHEMA
const CarSchema = new mongoose.Schema({
	imageName: String,
	type: String,
})
// DEFINE CARMODEL
const CarModel = mongoose.model("cars",CarSchema)


async function createCar(){
	// Create and validate and upload car to server
	const car = await CarModel.create({
		imageName: "WAI!CAR.jpg",
		type: "supercar",
	})

	// Print
	console.log("car",car)
	console.log(await CarModel.find())

}
createCar()
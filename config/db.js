const dbName = "myFirstDatabase";
const mongoose = require("mongoose");
const mongoURI =
	`mongodb+srv://kutayeen:teksas@cluster0.m9cqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` ||
	`mongodb://localhost:27017/${dbName}`;
const options = {
	useNewUrlParser: true
};

mongoose.connect(mongoURI, options);

mongoose.connection.on("connected", () => console.log("connected on:", mongoURI));

mongoose.connection.on("error", err => console.log("error:", err));

mongoose.connection.on("disconnected", () => console.log("disconnected"));

process.on("SIGINT", () => {
	mongoose.connection.close(() => {
		console.log("app terminated, closing mongo connection");
		process.exit(0);
	});
});

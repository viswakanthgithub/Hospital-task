var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://viswakanth17:L9YAEttbaiiOwmDY@cluster0.qfy3xik.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};

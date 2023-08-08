var mongoose = require ('mongoose');


mongoose.Promise = global.Promise;

//change the database with yours
mongoose.connect("mongodb+srv://viswakanth17:Hnz6lnpwMXSvH1jk@cluster0.fzsgpw7.mongodb.net/?retryWrites=true&w=majority");

module.exports = {mongoose};


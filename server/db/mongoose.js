var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://viswakanth17:Hnz6lnpwMXSvH1jk@cluster0.wmslxde.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully!');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});
module.exports = { mongoose };

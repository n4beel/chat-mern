var mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true,useUnifiedTopology: true });

module.exports = mongoose;
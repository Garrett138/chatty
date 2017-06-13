var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('assets'))
app.use(bodyParser.json())



  var messages = [];


  app.get('/messages', function (req, res, next){
    res.status(200).json({ messages: messages });
  });

  app.post('/messages', function (req, res, next) {
    messages.push({
      message: req.body.message,
      time: new Date()
    });
    res.status(200).json({ messages: messages });
    // console.log(req.body);
  });





app.listen(3000, function(){
  console.log("listening at port 3000!")
});

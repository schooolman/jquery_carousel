/**
 * Created by JacobSchoolmeesters on 9/26/15.
 */
var express = require('express');

var app = express();

var studentInfo = require('./public/assets/data/students.json')

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("Listening at port: " + port);

});

app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response){
    console.log('Hit empty route');
    response.sendFile(__dirname + '/public/views/index.html');
});

app.get('/studentInfo', function(request,response){
    console.log("hit student info");
    response.send(studentInfo);
})
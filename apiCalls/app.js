const express = require("express")
const request = require("request")

const app = express()


app.get("/", function(req, res){
    res.send("Welcome to the Home Page")
})


//SUNSET IN CHARLESTON
request('https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22charleston%2C%20sc%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys', function(err, res, body){
    if(!err && res.statusCode == 200){
        const data = JSON.parse(body)
        console.log(data)
    }
})


app.listen(3000, function(){
    console.log("Server up!")
})
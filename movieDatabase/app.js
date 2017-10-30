const request = require('request')
const express = require('express')

const app = express()

app.set("view engine", "ejs")

app.get("/", function(req,res){
  res.render("search")
})

app.get("/results", function(req, res){
  const query = req.query.search
  const url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb&"
  request(url, function(err, response, body){
      if(!err && res.statusCode == 200){
          const data = JSON.parse(body)
          res.render("results", {data: data})
      }
  })
})



app.listen(3000, function(){
  console.log("Server up!")
})
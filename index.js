var express = require("express")
var app = express()
app.set("view engine", "hbs")
app.use(express.static("public"))
var compliments = [
  "Your mother loves you",
  "A Lanister always pays his debts",
  "Winter is coming",
  "Only a Sith deals in absolutes",
  "It's a brand new day, brand new you",
  "The Force is strong with you"
]

var colors = ["#EC192D", "#0080FF","#01DF3A","#722CA5"]

Array.prototype.random = function(){
  return this[Math.floor(this.length * Math.random())]
}

app.get("/:name?", function(req, res){
  res.render("index", {
    compliment: compliments.random(),
    color: colors.random(),
    name: req.params.name
  })
})


app.listen(4000)

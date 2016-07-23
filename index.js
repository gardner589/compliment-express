var express = require("express")
var app = express()
app.set("view engine", "hbs")
app.use(express.static("public"))
var compliments = [
  "Your mother love you",
  "A Lanister always pays his debts",
  "Winter is coming",
  "Only a Sith deals in absolutes",
  "It's a brand new day, brand new you!",
  "The Force is strong with you"
]

var colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]

Array.prototype.random = function(){
  return this[Math.floor(this.length * Math.random())]
}

app.get("/", function(req, res){
  res.render("index", {
    compliment: compliments.random(),
    color: colors.random()
  })
})


app.listen(4000)

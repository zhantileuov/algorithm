const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/quizDB')


const quizSchema = new mongoose.Schema({
  taskName: String,
  taskScenario: String,
  steps: [
    new mongoose.Schema({
      point: String,
      stepDescr: String,
      category: String,
    })
  ]
})


const Task = mongoose.model("Task", quizSchema)

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
  res.render("index")
})


app.get("/create-task", (req, res) => {
  res.render("createTask")
})

app.post("/hel", (req, res) =>{
  var data = req.body
  console.log(req.body)
  const newTask = new Task({
    taskName: data.taskName,
    taskScenario: data.taskDescription,
  })
  for(const prop in data){
    newTask.steps.push({stepDescr: data[prop][0], category:data[prop][1], point: data[prop][2]})
  }
  newTask.save()
  res.redirect("quiz")

})
app.get("/quiz", (req, res) =>{
  Task.find({}, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.render("quiz", {task: data})
    }
  })
})
app.get("/quiz/:id", (req, res) =>{
  Task.find({_id: req.params.id}, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.render("task", {task:data[0]})
    }
  })
})


app.listen(3000, function(){
  console.log("port: 3000");
})

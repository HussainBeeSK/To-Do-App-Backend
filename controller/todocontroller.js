const todomodel  = require('../models/todomodel');


module.exports.gettododata = async (req,res)=>{
    const fetched = await todomodel.find()
    res.send(fetched)
}

module.exports.savetododata = async (req,res)=>{
    const {text} = req.body
    todomodel.create({text}).then((data)=>{
        console.log("saved successfully")
        console.log(data)
        res.json({"message" : "inserted successfully"})
    })
}

module.exports.updatetododata = async (req,res)=>{
      const text = req.body.text
    todomodel.findByIdAndUpdate(req.body.id,{text}).then((data)=>{
        res.send("updated the data successfully from the Response")
    }).catch((err)=>{
        console.log(err)
    })
}


module.exports.deletedatabyid = async (req,res)=>{
    console.log("id from body",req.body.id)
    todomodel.findByIdAndDelete(req.body.id).then((data)=>{
        // console.log("deleted successfully")
        res.json({"message" : "deleted successfully msg from the Response"})
    }).catch((err)=>{
        console.log(err)
    })
}
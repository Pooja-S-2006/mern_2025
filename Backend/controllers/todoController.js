const todo = require('../models/todoModel')

exports.getTodo =  async(req,res)=>{
    const todoData = await todo.find();
    res.status(200).json({data:todoData});
    
}


exports.getTodoById =  async (req,res) =>{
    const todoData = await todo.findById(req.params.id);
    res.status(200).json({todoData});
};


exports.postTodo = async (req,res) =>{
    const {task} = req.body;
    const exist = await todo.findOne({task});
    if(exist) return res.status(401).json({
        message:"Task already exist"
    })
    const newtodo = new todo({task})
    await newtodo.save();
    res.status(200).json({todo:newtodo})

}

exports.putTodo = async (req,res) =>{
    
    const update = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!update) return res.status(401).json({message:"Task not exist"})
        res.status(200).json({update})
    
}
exports.deleteTodo = async (req,res) =>{
    const deleteTodo = await todo.findByIdAndDelete(req.params.id)
    if(!deleteTodo) return res.status(401).json({message:"Task not exist"})
        res.status(200).json({message:"Task Deleted successfully"})
}

const { text } = require("body-parser");

let messages = [];
let id =0;
module.exports ={
    getMessages:(req,res) =>{
        res.status(200).send(messages)
    },
    addMessage:(req,res) =>{
        const {text,time} = req.body
        const newMessage={
            text: text,
            time: time
        }
        id++;
        messages = messages = [...messages,newMessage]
        res.status(200).send(messages)
    },
    deleteMessage:(req,res) =>{
        const {id} = req.params
        messages = messages.filter((e)=> e.id !==+id)
        res.status(200).send(messages)
    },
    editMessage:(req,res) =>{
        const {id} = req.params
        const {text,time} = req.body
        const mIndex = messages.findIndex((e) => e.id === +id)
        messages.splice(index, 1, {
        text: text || messages[index].text,
        id: +id
        })
        res.status(200).send(messages)
    }

}
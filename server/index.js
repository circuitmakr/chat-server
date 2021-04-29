const express = require('express')
const app =  express()
app.use(express.json())
app.get('/api/chat-data')
const cc = require('./Controllers/messages_controller')
app.use(express.static(__dirname + '/../public/build'));

messagesURL = '/api/messages';
app.get('/api/messages', cc.getMessages)
app.post('/api/messages', cc.addMessage)
app.delete(`${messagesURL}/:id`, cc.deleteMessage)
app.put(`${messagesURL}/:id`, cc.editMessage)


const PORT = 3001
app.listen(PORT, ()=> console.log(`Hello this app is listening at ${PORT}, happy developing Kendal!`))
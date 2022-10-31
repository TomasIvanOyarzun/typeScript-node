import express from 'express'
import diaryRouter from './routes/people'

const app = express()


app.use(express.json())

app.get('/ping', (_, res) => {
    console.log('someone pinged here!!!' + new Date().toLocaleDateString())
   
    res.send('pong')
})

app.use('/', diaryRouter)
app.listen(3001, ()=> {
    console.log('server running on port 3001')
})
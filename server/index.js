import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

//Implement MySql connection

const user = {
    userId: '23424',
    name: 'Juan',
    lastName: 'Pablo'
}

app.use(cors())
app.use(express.json()) //Middleware to parse JSON bodies

app.get('/test', (req, res) => {
    console.log(req.query.email)
    if (req.query.email == "test@gmail.com")
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
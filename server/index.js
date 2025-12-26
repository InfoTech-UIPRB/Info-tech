import express from 'express'
import cors from 'cors'
import Database from './Database.js'

const app = express()
const PORT = 5000

const db = new Database()

app.use(cors())
app.use(express.json()) //Middleware to parse JSON bodies

app.get('/test', (req, res) => {
    const {email, password} = req.query;
    res.send(db.query(`SELECT * FROM Users WHERE email = '${email}' AND password = '${password}' `));
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
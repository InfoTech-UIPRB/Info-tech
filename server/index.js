import express from 'express'
import cors from 'cors'
import Database from './Database.js'

const app = express()
const PORT = 5000

const db = new Database()

app.use(cors())
app.use(express.json()) //Middleware to parse JSON bodies

app.get('/test', async (req, res) => {
	const {email, password} = req.query;
	res.send(await db.query(`SELECT * FROM USER WHERE email = '${email}'`));
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))



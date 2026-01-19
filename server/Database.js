import mysql from "mysql2/promise";

export default class Database
{
    constructor()
    {
        this.connection = mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        }); 
    }

    query(sql) {
        this.connection.connect((err) => {
            if (err) throw err
            console.log("Connected")
            this.connection.query(sql, result)
        })
        return result
    }
}
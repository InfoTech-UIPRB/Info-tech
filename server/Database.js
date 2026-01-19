import mysql from "mysql2";

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

    async query(sql) {
        return await this.connection.execute(sql);
    }
}

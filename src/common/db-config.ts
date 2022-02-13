import { ConnectionOptions } from "typeorm";

const dbConfig: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'movies_app'
};

export default dbConfig;
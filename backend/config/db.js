// import mysql2 from "mysql2/promise";

// const db = mysql2.createPool({
//   host:               "localhost",
//   user:               "root",
//   password:           "Android123",
//   database:           "project101",
//   port:               3306,
//   waitForConnections: true,
//   connectionLimit:    10,
// });

// export default db;







import 'dotenv/config'
import mysql2 from 'mysql2/promise'

const db = mysql2.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'project101',
  port: Number(process.env.DB_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
})

export default db
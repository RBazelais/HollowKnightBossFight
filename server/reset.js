import { pool } from '../config/database.js'
import dotenv from '../.env'
import bosses from './config/data'

const createTableQuery = `
    DROP TABLE IF EXISTS bosses;

    CREATE TABLE IF NOT EXISTS bosses (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        location VARCHAR(255) NOT NULL,
        health INT NOT NULL,
        difficulty VARCHAR(30) NOT NULL,
        rewards TEXT[] NOT NULL,
        lore TEXT NOT NULL,
        strategy TEXT NOT NULL,
        submittedBy VARCHAR(255) NOT NULL,
        submittedOn TIMESTAMP NOT NULL
    )
`

try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 bosses table created successfully')
}
catch (err) {
    console.error('⚠️ error creating bosses table', err)
}

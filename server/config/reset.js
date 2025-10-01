import { pool } from '../config/database.js'
import dotenv from '../.env'
import bosses from './data.js'

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

const createBossesTable = async () => {
    try {
        await pool.query(createTableQuery)
        console.log('🎉 bosses table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating bosses table', err)
    }
}

const seedBossesTable = async () => {
    await createBossesTable()

    for (const boss of bosses) {
        const insertQuery = {
            text: `INSERT INTO bosses 
                (name, image, description, location, health, difficulty, rewards, lore, strategy, submittedBy, submittedOn)`,
            values: [
                boss.name,
                boss.image,
                boss.description,
                boss.location,
                boss.health,
                boss.difficulty,
                boss.rewards, // should be an array
                boss.lore,
                boss.strategy,
                boss.submittedBy,
                boss.submittedOn
            ]
        }
        await pool.query(insertQuery)
    }
    console.log('🌱 bosses table seeded successfully')
}

seedBossesTable()

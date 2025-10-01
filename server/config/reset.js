import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: join(__dirname, '../../.env') })

import { pool } from './database.js'
import bosses from './data.js'

const createTableQuery = `
    DROP TABLE IF EXISTS bosses;

    CREATE TABLE IF NOT EXISTS bosses (
        id VARCHAR(255) PRIMARY KEY,
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
                (id, name, image, description, location, health, difficulty, rewards, lore, strategy, submittedBy, submittedOn)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
            values: [
                boss.id,
                boss.name,
                boss.image,
                boss.description,
                boss.location,
                boss.health,
                boss.difficulty,
                boss.rewards, // array of strings
                boss.lore,
                boss.strategy,
                boss.submittedBy,
                boss.submittedOn
            ]
        }
        try {
            await pool.query(insertQuery)
            console.log(`✅ ${boss.name} added successfully`)
        } catch (err) {
            console.error('⚠️ error inserting boss', err)
        }
    }
    console.log('🌱 bosses table seeded successfully')
}

seedBossesTable()

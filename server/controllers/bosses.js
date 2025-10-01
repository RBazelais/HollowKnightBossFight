import { pool } from '../config/database.js';

const getBosses = async (req, res) => {
    try {
        console.log('Attempting to fetch bosses from database...');
        const results = await pool.query('SELECT * FROM bosses ORDER BY id ASC');
        console.log(`Successfully fetched ${results.rows.length} bosses`);
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch bosses from database',
            details: error.message
        });
    }
};

export default { getBosses };
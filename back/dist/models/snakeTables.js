import { query } from "../config/db.js";
async function createSnakeTable() {
    const createSnakeQuery = `
    CREATE TABLE IF NOT EXISTS snakes(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    owner_ids VARCHAR(255)[],
    species VARCHAR(100),
    morph VARCHAR(100),
    sex VARCHAR(20),
    date_of_birth DATE,
    acquisition_date DATE,
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
    )
    `;
    try {
        // const res = await client()
        const rows = await query(createSnakeQuery);
        return rows;
    }
    catch (error) {
        console.error("Error creating snake table", error);
        throw error;
    }
}
async function createFeedingTable() {
    const createFeedingQuery = `
        CREATE TABLE IF NOT EXISTS feedings (
        id SERIAL PRIMARY KEY,
        snake_id VARCHAR(255) NOT NULL,
        feeding_date DATE NOT NULL,
        prey_type VARCHAR(100),
        prey_size VARCHAR(50),
        prey_weight VARCHAR(50),
        prey_frozen VARCHAR(50),
        quantity INTEGER DEFAULT 1,
        acceptance VARCHAR(50), 
        notes TEXT,
        created_at TIMESTAMP DEFAULT NOW()
        )
    `;
    try {
        const rows = await query(createFeedingQuery);
        return rows;
    }
    catch (error) {
        console.error('Error creating feeding table', error);
        throw error;
    }
}
export { createSnakeTable, createFeedingTable };
//# sourceMappingURL=snakeTables.js.map
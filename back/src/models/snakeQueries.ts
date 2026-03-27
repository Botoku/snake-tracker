import { query } from "../config/db.ts";
export interface Snake {
  id: number;
  user_id: string;
  name: string;
  species?: string;
}

// const SnakeModel = {
async function createSnakeEntry(data) {
  console.log(data, "data.body query")
  const {
    user_id,
    name,
    species,
    morph,
    sex,
    date_of_birth,
    acquisition_date,
    notes,
  } = data;

  try {
    const results = await query(
      `INSERT INTO snakes
    (owner_ids, name, species, morph, sex, date_of_birth, acquisition_date, notes)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `,
      [
        [user_id],
        name,
        species,
        morph,
        sex,
        date_of_birth,
        acquisition_date,
        notes,
      ],
    );

    return results[0];
  } catch (error) {
    console.log(error)
  }
}
// };

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
  } catch (error) {
    console.log("Error creating snake table");
  }
}

async function findSnakeByOwnerId(id: string): Promise<any> {
  const findSnakeQuery = `
  SELECT * FROM snakes WHERE owner_ids = $1 ORDER BY name
  `;

  try {
    const result = await query(findSnakeQuery, [[id]]);
    return result;
  } catch (error) {
    console.log("Error fetching snake");
  }
}

export { createSnakeTable, findSnakeByOwnerId, createSnakeEntry };

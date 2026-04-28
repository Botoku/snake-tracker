import { query } from "../config/db.ts";
import { Snake } from "../lib/types.ts";
// export interface Snake {
//   id: number;
//   user_id: string;
//   name: string;
//   species?: string;
// }


// SNAKE REGISTRATION
// const SnakeModel = {
async function createSnakeEntry(data:Snake) {
  console.log(data, "data.body query")
  const {
    owner_ids,
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
        owner_ids,
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


export {  findSnakeByOwnerId, createSnakeEntry };

import { query } from "../config/db.ts";

async function createFeedingEntry(data) {
  const { id, snake_id, feeding_date, prey_type, prey_size, quantity, notes } =
    data;

  try {
    const results = await query(
      `
      INSERT INTO feedings
      (snake_id, feeding_date,prey_type,prey_size,quantity,notes)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [snake_id, feeding_date, prey_type, prey_size, quantity, notes],
    );

    return results[0]
  } catch (error) {
    console.log(error);
  }
}

export { createFeedingEntry };

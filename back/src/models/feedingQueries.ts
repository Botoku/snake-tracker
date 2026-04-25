import { query } from "../config/db.ts";

async function createFeedingEntry(data) {
  const {
    snake_id,
    feeding_date,
    prey_type,
    prey_size,
    quantity,
    acceptance,
    notes,
  } = data;

  try {
    const results = await query(
      `
      INSERT INTO feedings
      (snake_id, feeding_date,prey_type,prey_size,quantity,acceptance,notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      `,
      [
        snake_id,
        feeding_date,
        prey_type,
        prey_size,
        quantity,
        acceptance,
        notes,
      ],
    );

    return results[0];
  } catch (error) {
    console.log(error);
    throw error
  }
}

export { createFeedingEntry };

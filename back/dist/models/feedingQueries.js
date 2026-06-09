import { query } from "../config/db.js";
async function createFeedingEntry(data) {
    const { snake_id, feeding_date, prey_type, prey_size, prey_weight, prey_frozen, quantity, acceptance, notes, } = data;
    try {
        const results = await query(`
      INSERT INTO feedings
      (snake_id, feeding_date,prey_type, prey_weight ,prey_size,prey_frozen,quantity,acceptance,notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9)
      RETURNING *
      `, [
            snake_id,
            feeding_date,
            prey_type,
            prey_weight,
            prey_size,
            prey_frozen,
            quantity,
            acceptance,
            notes,
        ]);
        return results[0];
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
async function findAllFeedingEntries(id) {
    const findFeedingsQuery = `
    SELECT * from feedings  WHERE snake_id = $1 ORDER BY feeding_date
    `;
    try {
        const result = await query(findFeedingsQuery, [id]);
        return result;
    }
    catch (error) {
        console.log(error, "Error fetching feedings");
        throw error;
    }
}
export { createFeedingEntry, findAllFeedingEntries };
//# sourceMappingURL=feedingQueries.js.map
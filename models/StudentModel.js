import pool from './db.js'

export const getStudent = async () => {
    const[rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
}

export const updateStudent = async (srcode, name, course, StudentId) => {
    const [result] = await pool.query (
        "UPDATE tblstudent SET srcode = ?, name = ?, course = ? WHERE id = ?",
        [srcode, name, course, StudentId]
    );
    return result.affectedRows;
}

const db = require('@db/mysql')
const hashService = require('@services/hashService')

exports.findAll = async (columns = []) => {
    const sqlColumns = columns.length > 0 ? columns.join(',') : '*';
    const [rows, fields] = await db.query(`
    select ${sqlColumns}
    from users
    `)
    return rows;
}
exports.find = async (userID) => {
    const [rows, fields] = await db.query(`
    select *
    from users
    where ID=?
    `, [userID])
    return rows.length > 0 ? rows[0] : false;
}
exports.all = async () => {
    const [rows, fields] = await db.query(`
    select *
    from users
    order by created_at desc
    `)
    return rows;
}
exports.create = async (userData) => {
    const hashedPassword = hashService.hashPassword(userData.password);
    const updateUserData = {
        ...userData,
        password: hashedPassword
    };
    const [result] = await db.query(`insert into users set ?`, [updateUserData])
    return result.insertId;

}
exports.delete = async (userID) => {

    const [result] = await db.query(`delete from users where ID=? limit 1`, [userID]);
    return result.affectedRows > 0;

}
exports.update = async (userID, updateFields) => {
    const [result] = await db.query(`update users set ? where ID=? limit 1`, [updateFields, userID])
    return result.affectedRows > 0;

}
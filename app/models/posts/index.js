const db = require('@db/mysql')

exports.findAll = async () => {
    const [rows, fields] = await db.query(`
    select p.*,u.full_name
    from posts p
    join users u on p.author_id = u.ID
    order by p.created_at desc
    `)
    return rows;
}
exports.find = async (postID) => {
    const [rows, fields] = await db.query(`
    select p.*,u.full_name
    from posts p
    join users u on p.author_id = u.ID
    where p.id=? limit 1
    `, [postID])
    return rows.length > 0 ? rows[0] : false;
}
exports.create = async (postData) => {

    const [result] = await db.query(`insert into posts set ?`, [postData])
    return result.insertId;

}
exports.delete = async (postID) => {

    const [result] = await db.query(`delete from posts where ID=? limit 1`, [postID]);
    console.log(result)
    return result.affectedRows > 0;

}

exports.update = async (postID,updateFields) => {

    const [result]= await db.query(`update posts set ? where ID=? limit 1`,[updateFields,postID])
    return result.affectedRows > 0;

}
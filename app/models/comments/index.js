const db = require('@db/mysql');
const commentStatus = require('./commentStatus')

exports.findAll = async () => {
    const [rows, fields] = await db.query(`
    select c.*,p.title
    from comments c
    join posts p on c.post_id=p.ID
    order by c.created_at desc
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
exports.delete = async (commentID) => {
    const [result] = await db.query(`delete from comments where ID=? limit 1`, [commentID]);
    return result.affectedRows > 0;
}

exports.update = async (postID, updateFields) => {

    const [result] = await db.query(`update posts set ? where ID=? limit 1`, [updateFields, postID])
    return result.affectedRows > 0;
}

exports.approve = async (commentID, updateFields) => {
    const [result] = await db.query(`
    update comments set status=? where ID=? limit 1`, [commentStatus.APPROVED, commentID])
    return result.affectedRows > 0;
};

exports.reject = async (commentID, updateFields) => {
    const [result] = await db.query(`
    update comments set status=? where ID=? limit 1`, [commentStatus.REJECTED, commentID]);
    return result.affectedRows > 0;
};
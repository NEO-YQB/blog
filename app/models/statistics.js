const db = require('@db/mysql')

exports.totalUsers = async () => {
    const [result] = await db.query(`select count(id) as totalUsers from users`);
    return result[0].totalUsers;
};

exports.totalPosts = async () => {
    const [result] = await db.query(`select count(id) as totalPosts from posts`);
    return result[0].totalPosts;
};

exports.totalComments = async () => {
    const [result] = await db.query(`select count(id) as totalComments from comments`);
    return result[0].totalComments;
};

exports.totalViews = async () => {
    const [result] = await db.query(`select sum(views) as totalViews from posts`);
    return result[0].totalViews;
};
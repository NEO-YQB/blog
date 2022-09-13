const db = require('@db/mysql')

exports.findAll = async (columns = []) => {
    const sqlColumns = columns.length > 0 ? columns.join(',') : '*';
    const [rows, fields] = await db.query(`
    select ${sqlColumns}
    from settings
    `)
    return rows;
};

exports.update = async (updateFields) => {
    Object.keys(updateFields).forEach(setting_name=>{
        db.query(`update settings set setting_value=? where setting_name=?`,[updateFields[setting_name],setting_name]);
    });
};

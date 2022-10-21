const usersModel = require('@models/user');
const dateService = require('@services/dateService');
const langService = require('@services/langService');
// const validators = require('@validators/users');




exports.index = async (req, res) => {
    const users = await usersModel.findAll();
    const peresntedPosts = users.map(user => {
        user.created_at_persian = dateService.toPersianDate(user.created_at);
        user.persianviews = langService.toPersianNumbers(user.views)
        return user;
    })

    res.adminRender('admin/users/index', {
        users
    });

};

exports.new = async (req, res) => {
    const users = await usersModel.findAll(['ID', 'full_name']);
    res.adminRender('admin/users/create', {
        users
    })
};

exports.store = async (req, res) => {


    const userData = {
        full_name: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    };
    const insertId = await usersModel.create(userData);
    if (insertId) {
        req.flash('success','کاربر جدید با موفقیت اضافه شد');
        res.redirect('/admin/users')
    };
};

exports.remove = async (req, res) => {
    const userID = await req.params.userID;
    if (parseInt(userID) === 0) {
        req.redirect('/admin/users');
    }
    const result = await usersModel.delete(userID);
    res.redirect('/admin/users')
}

exports.edit = async (req, res) => {
    const userID = await req.params.userID;
    if (parseInt(userID) === 0) {
        req.redirect('/admin/users');
    }
    const user = await usersModel.find(userID);
    const users = await usersModel.findAll(['id', 'full_name']);
    res.adminRender('admin/users/edit',{users})
}

exports.update = async (req, res) => {
    const userID = await req.params.userID;
    if (parseInt(userID) === 0) {
        req.redirect('/admin/users');
    }
    const userData = {
        full_name: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    };
    const result = await usersModel.update(userID,userData)
    return res.redirect('/admin/users')
}
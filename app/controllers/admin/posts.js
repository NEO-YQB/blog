const postsModel = require('@models/posts')
const usersModel = require('@models/user')
const dateService = require('@services/dateService')
const langService = require('@services/langService')
const postValidators = require('@validators/posts')
const {
    statuses
} = require('@models/posts/postStatus')


exports.index = async (req, res) => {
    const posts = await postsModel.findAll();
    const peresntedPosts = posts.map(post => {
        post.created_at_persian = dateService.toPersianDate(post.created_at);
        post.persianviews = langService.toPersianNumbers(post.views)
        return post;
    })

    res.render('admin/posts/index', {
        layout: 'layout',
        posts: peresntedPosts
    });

};

exports.new = async (req, res) => {
    const users = await usersModel.findAll(['id', 'full_name']);
    res.render('admin/posts/create', {
        layout: 'layout',
        users
    })
};

exports.store = async (req, res) => {


    const postData = {
        title: req.body.title,
        slug: req.body.slug,
        author_id: req.body.author,
        content: req.body.content,
        status: req.body.status,
    };
    const errors = postValidators.create(postData);

    if (errors.length > 0) {
        const users = await usersModel.findAll(['ID', 'full_name']);
        return res.render('admin/posts/create', {
            layout: 'layout',
            users,
            errors,
            hasError: errors.length > 0,
        })
    }
    const insertId = await postsModel.create(postData);
    if (insertId) {
        res.redirect('/admin/posts')
    };
};

exports.remove = async (req, res) => {
    const postID = await req.params.postID;
    if (parseInt(postID) === 0) {
        req.redirect('/admin/posts');
    }
    const result = await postsModel.delete(postID);
    res.redirect('/admin/posts')
}

exports.edit = async (req, res) => {
    const postID = await req.params.postID;
    if (parseInt(postID) === 0) {
        req.redirect('/admin/posts');
    }
    const post = await postsModel.find(postID);
    const users = await usersModel.findAll(['id', 'full_name']);
    res.render('admin/posts/edit', {
        layout: 'layout',
        users,
        post,
        postStatus: statuses(),
        helpers: {
            isPostAuthor: function (userID, options) {
                return post.author_id === userID ? options.fn(this) : options.inverse(this);
            },
            isSelectedStatus: function (status, options) {
                return post.status === status ? options.fn(this) : options.inverse(this);
            },
        },
    })
}

exports.update = async (req, res) => {
    const postID = await req.params.postID;
    if (parseInt(postID) === 0) {
        req.redirect('/admin/posts');
    }
    const postData = {
        title: req.body.title,
        slug: req.body.slug,
        author_id: req.body.author,
        content: req.body.content,
        status: req.body.status,
    };
    const result = await postsModel.update(postID, postData)
    res.redirect('/admin/posts')
}
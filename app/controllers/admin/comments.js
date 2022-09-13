const commentsModels = require('@models/comments');
const userService = require('@services/userService');
const dateService = require('@services/dateService');
const langService = require('@services/langService');
const commentStatus = require('@models/comments/commentStatus')

exports.index = async (req, res) => {
    const comments = await commentsModels.findAll();
    const presentedComments = comments.map(comment => {
        comment.created_at_persian = dateService.toPersianDate(comment.created_at);
        comment.userAvatar = userService.gravatar(comment.user_email);
        return comment;
    })
    res.render('admin/comments/index', {
        layout: 'layout',
        comments: presentedComments,
        helpers: {
            commentBackground: function (status, options) {
                let cssClass = 'alert ';
                switch (true) {
                    case status === commentStatus.APPROVED:
                        cssClass += 'alert-success'
                        break
                }
                switch (true) {
                    case status === commentStatus.REJECTED:
                        cssClass += 'alert-danger'
                        break
                }
                switch (true) {
                    case status === commentStatus.REVIEW:
                        cssClass += 'alert-dark'
                        break
                }
                return cssClass;
            }
        }
    })
};

exports.approve = async (req, res) => {
    const commentID = req.params.commentID;
    const result = await commentsModels.approve(commentID);
    return res.redirect('/admin/comments')
};

exports.reject = async (req, res) => {
    const commentID = req.params.commentID;
    const result = await commentsModels.reject(commentID);
    return res.redirect('/admin/comments')
};

exports.delete = async (req, res) => {
    const commentID = req.params.commentID;
    const result = await commentsModels.delete(commentID);
    return res.redirect('/admin/comments')
};
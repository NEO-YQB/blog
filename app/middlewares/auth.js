module.exports = (req, res, next) => {

    if (!req.session.hasOwnProperty('user')) {
        res.redirect('/auth/login')
    };
    next();
}
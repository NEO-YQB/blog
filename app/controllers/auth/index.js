exports.showLogin = (req, res) => {

    res.render('auth/login', {
        layout: 'auth'
    })

};
exports.doLogin = (req, res) => {};
exports.showRegister = (req, res) => {};
exports.doRegister = (req, res) => {};
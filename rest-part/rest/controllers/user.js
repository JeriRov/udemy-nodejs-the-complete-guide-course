const User = require('../models/user');

exports.getUserStatus = (req, res, next) => {
    const userId = req.userId;
    User.findById(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find this user.');
                error.statusCode = 404;
                throw error;
            }
            console.log(user);
            res.status(200).json({message: 'User fetched.', status: user.status});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
exports.updateUserStatus = (req, res, next) => {
    const userId = req.userId;
    User.findById(userId)
        .then(user => {
            if (!user) {
                const error = new Error('Could not find this user.');
                error.statusCode = 404;
                throw error;
            }
            user.status = req.body.status;
            return user.save();
        }).then(result => {
        res.status(200).json({ message: 'Status updated!', status: result.status });
    })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

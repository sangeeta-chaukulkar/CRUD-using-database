const User = require('../models/user');

exports.getAddUser = (req, res, next) => {
  res.render('admin/edit-user', {
    pageTitle: 'Add User',
    path: '/admin/add-user',
    editing: false
  });
};


exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  User.create({
    name: name,
    age: age,
    email: email
  })
    .then(result => {
      // console.log(result);
      console.log('Created User');
      res.redirect('/admin/users');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.render('admin/user-list', {
        prods: users,
        pageTitle: 'Users',
        path: '/admin/users'
      });
    })
    .catch(err => console.log(err));
};

exports.postDeleteUser= (req, res, next) => {
  const userId = req.body.userId;
  User.findById(userId)
    .then(user => {
      return user.destroy();
    })
    .then(result => {
      console.log('DESTROYED USER');
      res.redirect('/admin/users');
    })
    .catch(err => console.log(err));
};






if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  }
  const PORT = process.env.PORT || 3000;
  
  const path = require('path');
  
  const express = require('express');
  const bodyParser = require('body-parser');
  const mongoose = require('mongoose');
  const session = require('express-session');
  const MongoDBStore = require('connect-mongodb-session')(session);
  const csrf = require('csurf');
  const flash = require('connect-flash');
  
  
  // const errorController = require('./controllers/error');
  const User = require('./models/user');
//   const errorController = require('./controllers/error');
  // const user = require('./models/user');
  const MONGODB_URI = process.env.MONGODB_URI;
  
  
  const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
  });
  const csrfProtection = csrf();
  
  const app = express();
  app.set('view engine', 'ejs');
  app.set('views', 'views');
  

  const questionRoutes = require('./routes/question');
  const quizRoutes = require('./routes/quiz');
  const scoreRoutes = require('./routes/score');
  const tagRoutes = require('./routes/tag');
  const tokenRoutes = require('./routes/token');
  const userRoutes = require('./routes/user');
  console.log("Set Route Variables");
//   const authRoutes = require('./routes/auth');
  
//   app.use(bodyParser.urlencoded({extended: false}));
//   app.use(express.static(path.join(__dirname, 'public')));
//   app.use(
//     session({
//       secret: 'my secret',
//       resave: false,
//       saveUninitialized: false,
//       store: store
//     })
//   );
//   app.use(csrfProtection);
//   app.use(flash());
  
//   app.use((req, res, next) => {
//     res.locals.isAuthenticated = req.session.isLoggedIn;
//     res.locals.csrfToken = req.csrfToken();
//     next();
//   });
  
//   app.use((req, res, next) => {
//     if (!req.session.user) {
//       return next();
//     }
//     User.findById(req.session.user._id)
//       .then(user => {
//         if (!user) {
//           return next();
//         }
//         req.user = user;
//         next();
//       })
//       .catch(err => {
//         next(new Error(err));
//       });
//   });

  app.use(questionRoutes);
  app.use(quizRoutes);
  app.use(scoreRoutes);
  app.use(tagRoutes);
  app.use(tokenRoutes);
  app.use(userRoutes);
  console.log("Used Route Variables");


//   app.get('/500', errorController.get500);
  
//   app.use(errorController.get404);
  
//   app.use((error, req, res, next) => {
//     res.status(500).render('500', {
//       pageTitle: 'Error!',
//       path: '/500',
//       isAuthenticated: req.session.isLoggedIn
//     });
//   });
  
//   app.use(errorController.get404);
  
  mongoose
    .connect(MONGODB_URI)
    .then(result => {
      app.listen(PORT);
      console.log(`connectedTo ${PORT}`);
    })
    .catch(err => {
      console.log(err,"ERR, app.js/108");
    });
  
  
  
  
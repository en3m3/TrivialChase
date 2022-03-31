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
  
  // require('dotenv').config(); //heroku stuff
  
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
  

  const userRoutes = require('./routes/user');
  const quizRoutes = require('./routes/quiz');
  const questionRoutes = require('./routes/question');
  const tagRoutes = require('./routes/tag');
  const scoreRoutes = require('./routes/score');
  const tokenRoutes = require('./routes/token');

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  
  app.use(bodyParser.json());
  app.use(questionRoutes);
  app.use(quizRoutes);
  app.use(scoreRoutes);
  app.use(tagRoutes);
  app.use(tokenRoutes);
  app.use(userRoutes);
  console.log("Used Route Variables");

  mongoose
    .connect(MONGODB_URI)
    .then(result => {
      app.listen(PORT);
      console.log(`connectedTo ${PORT}`);
    })
    .catch(err => {
      console.log(err,"ERR, app.js/108");
    });
  
  
  
  
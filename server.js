const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');




require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());
app.use(express.static('client/build'))


const uri = process.env.ATLAS_URI;
        
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("You're connected boss");
})
const attractionRouter = require('./routes/routeattraction');  
const contactRouter = require('./routes/route.contact');  

// const { request } = require('express');

    app.use('/attractions', attractionRouter);
    app.use('/contact', contactRouter);  
 


    if (process.env.NODE_ENV === 'production') {
      // Exprees will serve up production assets
      app.use(express.static('client/build'));
    
      // Express serve up index.html file if it doesn't recognize route
      const path = require('path');
      app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
    }

app.listen(port, () => {
console.log(`Server is running on port: ${port}`);
});
const express = require('express');
const cors = require('cors'); // Add this line
const newsRoutes = require('./routes/news');
const userRoutes = require('./routes/user');
const queryRoutes = require('./routes/query');
const nutritionRoutes = require('./routes/nutritionRoute');
const Appointment = require("./routes/Appointment");
const Symptom = require('./routes/symptom')
const mongoose = require('mongoose');

// Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/news', newsRoutes);
app.use('/api/user', userRoutes);
app.use('/api/nearby', queryRoutes);
app.use('/api/nutrition', nutritionRoutes);
app.use('/appointmentinfo', Appointment);
app.use('/symptom', Symptom)

// Connect to the database
mongoose.connect(process.env.MONGOURI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}!!!`);
        });
    })
    .catch(err => {
        console.log(err);
    });

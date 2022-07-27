const express = require('express');
require('dotenv').config();
const cors = require('cors');
const authRouter = require('./src/routes/auth');
const groupesRouter = require('./src/routes/groupes');
const billsRouter = require('./src/routes/bills');
const accountsRouter = require('./src/routes/accounts');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/groupes', groupesRouter);
app.use('/api/bills', billsRouter);
app.use('/api/accounts', accountsRouter);

app.all('*', (req, res) => {
  res.status(404).send('Path not found!');
});

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));

// .env   failas  ====|+|+|+|++|+|+||=|=|=|=

// PORT=8080
// SECRET_KEY=sekretKeySS
// DB_CONNECTION=mongodb+srv://dbazyte:dbazyte@vigi17s.6gcjt.mongodb.net/?retryWrites=true&w=majority
// JWT_SECRET=jgkasghriaghkahgl;olj167
// DATABASE_USER=root
// DATABASE_PASSWORD=sqlbaze
// DATABASE_NAME=njs_test
// API_APP_KEY=87dff5349bcdb39cdaabd549071c788d

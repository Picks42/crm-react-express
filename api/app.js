import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import mongoData from './mongoData';

const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.json());

//db  config
const mongoUrl = "mongodb+srv://admin:test@123@cluster0.j9zcl.mongodb.net/crmDB?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
mongoose.connection.once('open', () => {
  console.log("DB connected");
})
//api routes
app.get("/", (req, res) => {
  mongoData.find((err,data)=>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
});

app.post('/', (req, res) => {
  const reqData = req.body;

  mongoData.create(reqData, (err, data) => {
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(201).send(data);
    }
  })
})

//listen
app.listen(PORT, () => console.log(`Listening on port:${PORT}`));
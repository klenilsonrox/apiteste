import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import router from "./routes/router.js"

dotenv.config()

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.wgb80ab.mongodb.net/`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api", router)

mongoose.connect(uri, options)
  .then(() => {
    app.listen({
        host:"0.0.0.0",
        port:process.env.PORT ? Number(process.env.PORT) : 3000
    })
    console.log('Conexão com o MongoDB estabelecida com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });




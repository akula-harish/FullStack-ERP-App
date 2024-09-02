import express from "express";
import cors from "cors";
import loginRouter from "./routes/login/loginRoutes";
// import bodyParser from "body-parser";

const app = express();

app.use(cors({credentials: true, origin: "*"}));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(loginRouter);

app.get('/', (req:any, res:any)=>{
    res.send({data: "Hello first api"});
})

export default app;
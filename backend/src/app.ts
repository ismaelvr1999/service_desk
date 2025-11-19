import express from "express";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/",async (req,res)=>{

    res.status(200).json({message:"Welcome"});
});

export default app;
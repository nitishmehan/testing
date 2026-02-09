const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/',(req,res)=>{
    let body = req.body;
    let arr = body.data;
    let alpha = [];
    let numeric = [];
    arr.forEach(v => {
    if (isChar(v)) {
        alpha.push(v);
    } else if (isInteger(v)) {
        numeric.push(v);
    }
    });
    let result = {"Name" : "Ansh","Email" : "ansh0371.be23@chitkara.edu.in","RollNo.":2310990371,alpha,numeric};
    res.send(result).status(200);
});
app.listen(port,()=>{
    // console.log("Ansh Lodu");
});

function isChar(v) {
  return typeof v === "string" && v.length === 1;
}

function isInteger(v) {
  return typeof v === "number" && Number.isInteger(v);
}

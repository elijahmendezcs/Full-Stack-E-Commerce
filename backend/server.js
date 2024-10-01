import express from "express";

const app = express();

app.listen(1234, () => {
  console.log("Server started at http://localhost:1234");
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req: express.Request, res: express.Response): void => {
  res.send(`Server for Shehzad Attendance App!`);
});
app.listen(port, (): void =>
  console.log(`Example app listening on port ${port}`)
);
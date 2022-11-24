import express, { text } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const users = [];
const tweets = [];
let userAvatar;
app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  userAvatar = avatar;
  if (!username || !avatar) {
    res.status(400).send(alert("Todos os campos são obrigatórios"));
  }
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    res.status(409).send(alert("Usuário já existente."));
  }

  users.push({ username, avatar });
  res.send(201).send({ message: "ok" });
});

app.post("/tweets", (req, res) => {
  const data = req.body;
  tweets.push({ ...data, avatar: userAvatar });
  res.status(201).send("Ok");
});

app.get("/tweets", (req, res) => {
  let lastTweets = tweets.slice(-10);
  res.send(lastTweets.reverse());
});

app.listen(5000, () => console.log("App runing in port:5000"));

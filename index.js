import express from "express"
import cors from "cors"


const app = express();
app.use(express.json());
app.use(cors());

const username= [];
let avatar;
const tweet=[];

app.post("/sign-up", (req, res) => {
const data = req.body;
username.push(info);
avatar= data.avatar;
res.send("ok");
});

app.get("/sing-up", (req, res)=> {
    res.send(username)
})

app.post("/tweets", (req, res)=> {
    const data = req.body;
    tweet.push({...data, avatar: avatar})
    res.send(tweet);
})


app.get("tweets",(req, res)=>{
let Tweets = tweet.slice(-10);
res.send(Tweets.reverse());
});


app.listen(5000, ()=> {
    console.log("Server running in port:5000)")
});
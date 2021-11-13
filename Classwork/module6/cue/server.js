const express = require("express");
const app = express();
const morgan = require("morgan");
const axios = require("axios");
require("dotenv").config();
const { URLSearchParams } = require("url");
const expressJwt = require("express-jwt");
const mongoose = require("mongoose");

const clientID = process.env.client_ID;
const redirectURI = process.env.redirect_URI;
const authEndpoint = "https://accounts.spotify.com/authorize";

const port = 8888;

app.use(morgan("dev"));
app.use(express.json()); // To parse JSON bodies

const generateRandomString = (length) => {
  let text = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const scopes = [
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
];

mongoose.connect(
  "mongodb://localhost:27017/cueAppDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("Connected to the DB")
);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/auth", require("./routes/authRouter.js"));
app.use(
  "/app",
  expressJwt({
    secret: process.env.SECRET,
    algorithms: ["sha1", "RS256", "HS256"],
  })
);
app.use("/app/tracks", require("./routes/trackRouter.js"));
app.use("/app/albums", require("./routes/albumsRouter.js"));
app.use("/app/lists", require("./routes/listsRouter.js"));

app.get("/login", (req, res, next) => {
  const state = generateRandomString(16);

  res.cookie("spotify_auth_state", state, {
    expires: new Date(Date.now() + 3600),
    secure: true,
    httpOnly: true,
  });
  const queryParams = new URLSearchParams(
    `client_id=${clientID}&response_type=code&redirect_uri=${redirectURI}&state=${state}&scope=${scopes}`
  );

  res.redirect(`${authEndpoint}?${queryParams}`);
});

app.get("/callback", (req, res, next) => {
  const code = req.query.code || null;
  const grant = "authorization_code";

  const queryParams = new URLSearchParams(
    `grant_type=${grant}&code=${code}&redirect_uri=${redirectURI}`
  );
    axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: queryParams,
    headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${new Buffer.from(
        `${clientID}:${process.env.client_SECRET}`
        ).toString("base64")}`,
    },
    })
    .then((response) => {
        if (response.status === 200) {
        const { access_token, refresh_token, expires_in } = response.data;
        const tokenParams = new URLSearchParams(
            `access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`
        );
        res.redirect(`http://localhost:3000/?${tokenParams}`)
        } else {
        res.redirect(`/?${URLSearchParams({ error: "Invalid token" })}`);
        }
    })
    .catch((error) => {
        res.send(error);
    });
});

app.get("/refresh_token", (req, res) => {
  const { refresh_token } = req.query;
  const queryParams = new URLSearchParams(
    `grant_type=refresh_token&refresh_token=${refresh_token}`
  );

  axios({
    method: "post",
    // if breaks, check that lack of ? isn't causing issues in URLs
    url: "https://accounts.spotify.com/api/token",
    data: queryParams,
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${clientID}:${process.env.client_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

// ** create logout enpoint that removes cookies and sends user back to login page

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
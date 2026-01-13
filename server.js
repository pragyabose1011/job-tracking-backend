Last login: Tue Jan 13 22:47:09 on ttys000
pragyabose@Pragyas-MacBook-Air ~ % nvm --version

zsh: command not found: nvm
pragyabose@Pragyas-MacBook-Air ~ % nano ~/.zshrc

pragyabose@Pragyas-MacBook-Air ~ % ^[[200~source ~/.zshrc
zsh: bad pattern: ^[[200~source
pragyabose@Pragyas-MacBook-Air ~ % ~source ~/.zshrc

zsh: no such user or named directory: source
pragyabose@Pragyas-MacBook-Air ~ % ls -d ~/.nvm

/Users/pragyabose/.nvm
pragyabose@Pragyas-MacBook-Air ~ % nano ~/.zprofile

pragyabose@Pragyas-MacBook-Air ~ % source ~/.zprofile

pragyabose@Pragyas-MacBook-Air ~ % nvm --version

0.39.7
pragyabose@Pragyas-MacBook-Air ~ % nvm install 18
nvm use 18
node -v

Downloading and installing node v18.20.8...
Downloading https://nodejs.org/dist/v18.20.8/node-v18.20.8-darwin-arm64.tar.xz...
####################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v18.20.8 (npm v10.8.2)
Creating default alias: default -> 18 (-> v18.20.8)
Now using node v18.20.8 (npm v10.8.2)
v18.20.8
pragyabose@Pragyas-MacBook-Air ~ % cd ~/Downloads/Indago-job-tracking-web-API
rm -rf node_modules package-lock.json
npm install

npm warn deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.
npm warn deprecated
npm warn deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)
npm warn deprecated xss-clean@0.1.4: Package no longer supported. Contact Support at https://www.npmjs.com/support for more info.

added 248 packages, and audited 249 packages in 46s

27 packages are looking for funding
  run `npm fund` for details

5 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start


> indago-job-api@1.0.0 start
> node server.js

MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:62:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:71:1
(node:9164) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % ls -a

.			LICENSE			public
..			middleware		README.MD
.env			mock-data.json		routes
.git			models			server.js
.gitignore		node_modules		tmp
controllers		package-lock.json	utils
database		package.json
errors			populate.js
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % cat .env

PORT=5000
MONGO_URI= mongodb+srv://jobtracker:Ab##220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority
JWT_SECRET=dev_secret_123

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano server.js

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano database/connectDB.js

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % node -e "import 'dotenv/config'; console.log(process.env.MONGO_URI)"

[eval]:1
import 'dotenv/config'; console.log(process.env.MONGO_URI)
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at makeContextifyScript (node:internal/vm:122:14)
    at node:internal/process/execution:89:22
    at [eval]-wrapper:6:24
    at runScript (node:internal/process/execution:83:62)
    at evalScript (node:internal/process/execution:114:10)
    at node:internal/main/eval_string:30:3

Node.js v18.20.8
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % sed -n '1,20p' server.js

import dotenv from "dotenv"
dotenv.config()
import "express-async-errors"
import express from "express"
const app = express()
import { v2 as cloudinary } from "cloudinary"
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

// extra security packages
import helmet from "helmet"
import xss from "xss-clean"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import mongoSanitize from "express-mongo-sanitize"
import fileUpload from "express-fileupload"
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % ls -a
.			LICENSE			public
..			middleware		README.MD
.env			mock-data.json		routes
.git			models			server.js
.gitignore		node_modules		tmp
controllers		package-lock.json	utils
database		package.json
errors			populate.js
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % cat .env
PORT=5000
MONGO_URI= mongodb+srv://jobtracker:Ab##220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority
JWT_SECRET=dev_secret_123

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano .env
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start

> indago-job-api@1.0.0 start
> node server.js

MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:62:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:71:1
(node:9350) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano server.js

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano server.js

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = undefined
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:69:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:78:1
(node:9383) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % 
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano .env
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = undefined
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:69:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:78:1
(node:9416) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % rm .env

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % ls -a | grep env

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % cat << 'EOF' > .env
PORT=5000
MONGO_URI=mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority
JWT_SECRET=dev_secret_123
EOF

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % cat -A .env

cat: illegal option -- A
usage: cat [-belnstuv] [file ...]
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % sed -n 'l' .env                 

PORT=5000$
MONGO_URI=mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jo\
btracker?retryWrites=true&w=majority$
JWT_SECRET=dev_secret_123$
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % pkill -f node

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = undefined
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:69:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:78:1
(node:9446) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % rm .env
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % printf "PORT=5000\nMONGO_URI=mongodb+srv://jobtracker:Ab%%23%%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority\nJWT_SECRET=dev_secret_123\n" > .env

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % sed -n 'l' .env

PORT=5000$
MONGO_URI=mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jo\
btracker?retryWrites=true&w=majority$
JWT_SECRET=dev_secret_123$
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % pkill -f node

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = undefined
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:69:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:78:1
(node:9468) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % MONGO_URI="mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority" npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = undefined
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:69:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:78:1
(node:9485) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % MONGO_URI="mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority" npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = undefined
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.
    at Connection.openUri (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/connection.js:695:11)
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:414:10
    at /Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:41:5
    at new Promise (<anonymous>)
    at promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/helpers/promiseOrCallback.js:40:10)
    at Mongoose._promiseOrCallback (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:1290:10)
    at Mongoose.connect (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/mongoose/lib/index.js:413:20)
    at connectDB (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/database/connectDB.js:4:19)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:69:11)
    at file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:78:1
(node:9485) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % sed -n '1,120p' server.js

zsh: parse error near `)'
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % sed -n '1,120p' ./server.js

import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, ".env") })
console.log("MONGO_URI =", process.env.MMONGO_URI)
import "express-async-errors"
import express from "express"
const app = express()
import { v2 as cloudinary } from "cloudinary"
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
})

// extra security packages
import helmet from "helmet"
import xss from "xss-clean"
import cors from "cors"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import mongoSanitize from "express-mongo-sanitize"
import fileUpload from "express-fileupload"

import connectDB from "./database/connectDB.js"
import authenticateUser from "./middleware/authentication.js"
// Routers
import authRouter from "./routes/authRoutes.js"
import jobRouter from "./routes/jobRoutes.js"
// Middleware
import errorHandlerMiddleware from "./middleware/error-handler.js"
import notFoundMiddleware from "./middleware/not-found.js"

app.use(morgan("tiny"))
app.use(express.json())
app.use(cookieParser(process.env.JWT_SECRET))
app.set("trust proxy", 1)
app.use(helmet())
app.use(
  cors({
    origin: ["http://localhost:5173", "https://indago-job.netlify.app"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
  })
)
app.use(xss())
app.use(mongoSanitize())
app.use(fileUpload({ useTempFiles: true }))
app.use(express.static("./public"))

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", authenticateUser, jobRouter)

app.get("/", (req, res) => {
  res.send("<h1> Indago-job-tracking-website API </h2>")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// Create a server
const port = process.env.PORT || 5000 
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () =>
      console.log(`🚀 Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano server.js             
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % pkill -f node
npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority
(node:9518) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
node:events:495
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use :::5000
    at Server.setupListenHandle [as _listen2] (node:net:1817:16)
    at listenInCluster (node:net:1865:12)
    at Server.listen (node:net:1953:7)
    at Function.listen (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/express/lib/application.js:635:24)
    at start (file:///Users/pragyabose/Downloads/Indago-job-tracking-web-API/server.js:70:9)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
Emitted 'error' event on Server instance at:
    at emitErrorNT (node:net:1844:8)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21) {
  code: 'EADDRINUSE',
  errno: -48,
  syscall: 'listen',
  address: '::',
  port: 5000
}

Node.js v18.20.8
pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % nano .env

pragyabose@Pragyas-MacBook-Air Indago-job-tracking-web-API % npm start


> indago-job-api@1.0.0 start
> node server.js

MONGO_URI = mongodb+srv://jobtracker:Ab%23%23220569@job-tracking-cluster.hsgsu4n.mongodb.net/jobtracker?retryWrites=true&w=majority
(node:9537) [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
(Use `node --trace-deprecation ...` to show where the warning was created)
🚀 Server is listening on port 5001...
GET / 200 269658 - 8.835 ms
GET /favicon.ico 500 9 - 2.527 ms
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at new NodeError (node:internal/errors:405:5)
    at ServerResponse.setHeader (node:_http_outgoing:655:11)
    at ServerResponse.header (/Users/pragyabose/Downloads/Indago-job-tracking-web-API/node_modules/express/lib/response.js:794:10)
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import "express-async-errors"

// Load env FIRST
dotenv.config()

/* -------------------- App -------------------- */
const app = express()

/* -------------------- Middleware -------------------- */
app.use(express.json())

/* -------------------- Routes -------------------- */
app.get("/", (req, res) => {
  res.status(200).send("🚀 Job Tracking API is running")
})

/* -------------------- Error Handler -------------------- */
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  })
})

/* -------------------- DB + Server -------------------- */
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is missing in environment variables")
}

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log("✅ MongoDB connected")

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("❌ Failed to start server:", error)
    process.exit(1)
  }
}

startServer()


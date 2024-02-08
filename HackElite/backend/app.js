require("express-async-errors")
require("dotenv").config()

// express
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const app = express()

// cors configuration
const corsOptions = {
   origin: 'http://localhost:5173',
   credentials: true,
   optionSuccessStatus: 200
}
app.use(cors(corsOptions));

// extra packages
const cookieParser = require("cookie-parser")

// database
const connectToMongo = require("./db/connect")

// routers
const authRouter = require("./routes/authRoutes")
const videoRouter = require("./routes/videoRoutes")

// middleware
const notFoundMiddleware = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

// For parsing the request body.
app.use(express.json())
app.use(morgan("dev"))

// For Signing the cookies.
app.use(cookieParser(process.env.JWT_SECRET))

app.get("/", (req, res) => {
   res.status(200).send("API is Running")
})

// routes
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/video", videoRouter)

// Error handler and not found middlewares.
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

// Starting the application.
const port = process.env.PORT || 5000
const start = async () => {
   try {
      await connectToMongo()
      app.listen(port, () => {
         console.log(`Server started on port ${port}..`)
      })
   } catch (error) {
      console.log(error)
   }
}
start()

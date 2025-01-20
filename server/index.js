const app = require("./src/app");
const connectDB = require("./src/config/dbConnect");
// const logger = require("./controllers/loggerController");
const { serverPort } = require("./src/secret");
app.listen(serverPort, async () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
  // logger.log(`info`, `Server is running at http://localhost:${serverPort}`);
  await connectDB();
});

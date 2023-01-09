const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8060;

const server = app.listen(PORT, console.log(`Listening to PORT:${PORT}`));

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
  
    app.get("/*", (req, res) => {
      const index = path.join(__dirname, "client", "build", "index.html");
      res.sendFile(index);
    });
}

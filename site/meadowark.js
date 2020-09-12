const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3000); //Sets application port

app.use(function (res, req) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.type("text/plain");
  res.status(500);
  res.send("500 - Server Error");
});
app.listen(app.get("port"), function () {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});

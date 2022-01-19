const angular = require('angular')

// api route
app.use(require("./backend/route/api.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
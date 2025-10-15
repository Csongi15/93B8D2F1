

const express = require("express");
const app = express();

// alap GET végpont
app.get("/", (req, res) => {
  res.send("Üdv a Felhőállat Lexikon backend szerverén! ☁️");
});

// szerver indítása
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`A szerver fut a http://localhost:${PORT} címen`);
});

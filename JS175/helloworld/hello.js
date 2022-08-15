const express = require('express')

const COUNTRY_DATA = [
  {
    path: "/english",
    flag: "flag-of-United-States-of-America.png",
    alt: "US Flag",
    title: "Go to US English site",
  },
  {
    path: "/french",
    flag: "flag-of-France.png",
    alt: "Drapeau de la france",
    title: "Aller sur le site français",
  },
  {
    path: "/serbian",
    flag: "flag-of-Serbia.png",
    alt: "Застава Србије",
    title: "Идите на српски сајт",
  },
];

const LANGUAGE_CODES = {
  english: "en-US",
  french: "fr-FR",
  serbian: "sr-Cryl-rs",
};

const morgan = require('morgan')
const app = express()

app.set("views", "./views")   // look for views in the `./views` directory
app.set("view engine", "pug") // sets the view engine to pug

app.use(express.static('public')) // express.static creates middleware, instructing to look for static assets in public 
app.use(morgan("common"));        // morgan('common') creates middleware, which the express app uses
/*
const writeLog = (req, res) => {
  let timeStamp = String(new Date()).substring(4, 24); // Mmm dd YYYY HH:MM:SS
  console.log(`${timeStamp} ${req.method} ${req.originalUrl} ${res.statusCode}`);
};
*/

app.locals.currentPathClass = (path, currentPath) => {
  return path === currentPath ? "current" : "";
};

app.get("/:language", (req, res, next) => {
  const language = req.params.language;
  const languageCode = LANGUAGE_CODES[language];
  if (!languageCode) {
    next(new Error(`Language not supported: ${language}`)); // creates an Error
  } else {
    res.render(`hello-world-${language}`, {
      countries: COUNTRY_DATA,
      currentPath: req.path,
      language: languageCode,
    });
  }
});

app.use((err, req, res, _next) => { // error handler as last middleware
  console.log(err);
  // res.status(404).send(err.message);
  res.status(404).json({ "error": err.message }) // sends a JSON Request with the Err.Message
});

app.listen(3000, "localhost", () => {
  console.log(`Server listening on port 3000`)
})
const express = require('express')
const { body, validationResult } = require("express-validator");

const app = express()

const morgan = require('morgan')     // middleware used for Logging
const session = require("express-session");
const store = require("connect-loki");
const flash = require("express-flash");
const LokiStore = store(session);

app.use(express.urlencoded({ extended: false }));

const contactData = [
  {
    firstName: "Mike",
    lastName: "Jones",
    phoneNumber: "281-330-8004",
  },
  {
    firstName: "Jenny",
    lastName: "Keys",
    phoneNumber: "768-867-5309",
  },
  {
    firstName: "Max",
    lastName: "Entiger",
    phoneNumber: "214-748-3647",
  },
  {
    firstName: "Alicia",
    lastName: "Keys",
    phoneNumber: "515-489-4608",
  },
];

const sortContacts = contacts => {
  return [...contacts].sort((a, b) => {
    if (a.lastName < b.lastName) {
      return -1
    } else if (a.lastName > b.lastName) {
      return 1
    } else if (a.firstName < b.firstName) {
      return -1
    } else if (a.firstName > b.firstName) {
      return 1
    } else {
      return 0
    }
  })
}

const clone = object => {
  return JSON.parse(JSON.stringify(object));
};

app.set("views", "./views")
app.set("view engine", "pug")

app.use(express.static('public')) // tells Express to serve Static Files from public
app.use(morgan('common'))         // uses the 'common' formatting from morgan

app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-contacts-manager-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));

app.use(flash());

app.use((req, res, next) => {
  if (!("contactData" in req.session)) {
    req.session.contactData = clone(contactData); // creates a `contactData` property
  }

  next();
});

app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.get('/', (req, res) => {      // redirects traffic from / to /contacts
  res.redirect('/contacts')
})

app.get('/contacts', (req, res) => {
  res.render("contacts", {
    contacts: sortContacts(req.session.contactData)
  })
})

app.get('/contacts/new', (req, res) => {
  res.render('new-contact')  
})

const isAlphabetic = text => /^[a-z]+$/i.test(text);

app.post("/contacts/new",
  [
    body("firstName")
      .trim()
      .isLength({ min: 1 })
      .withMessage("First name is required.")
      .bail()
      .isLength({ max: 25 })
      .withMessage("First name is too long. Maximum length is 25 characters.")
      .isAlpha()
      .withMessage("First name contains invalid characters. The name must be alphabetic."),

    body("lastName")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Last name is required.")
      .bail()
      .isLength({ max: 25 })
      .withMessage("Last name is too long. Maximum length is 25 characters.")
      .isAlpha()
      .withMessage("Last name contains invalid characters. The name must be alphabetic."),

    body("phoneNumber")
      .trim()
      .isLength({ min: 1 })
      .withMessage("Phone number is required.")
      .bail()
      .matches(/^\d\d\d-\d\d\d-\d\d\d\d$/)
      .withMessage("Invalid phone number format. Use ###-###-####."),
  ],
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(error => req.flash("error", error.msg));
      res.render("new-contact", {
        flash: req.flash(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
      });
    } else {
      next();
    }
  },
  (req, res) => {
    req.session.contactData.push({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
    });

    res.redirect("/contacts");
  }
);

const PORT = 3000
app.listen(PORT, "localhost", () => {
  console.log(`Listening in Port ${PORT}`)
})
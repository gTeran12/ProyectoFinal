var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* MÓDULO dotenv */
const dotenv = require("dotenv");

/* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
dotenv.config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

/* CARGA DEL MIDDLEWARE authenticateJWT */
var authenticateJWT = require("./middleware/auth");

/* REFERENCIA AL MANEJADOR DE RUTAS */
var packageRouter = require("./routes/rest_package");

/* modulo cors*/
var cors = require("cors");

var app = express();

/* USE LA FUNCIÓN authenticateJWT */
app.use("/rest/package", authenticateJWT, packageRouter);

/* middleware cors */
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
app.use("/rest/rest_package", packageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

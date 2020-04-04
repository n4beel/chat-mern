// const jwt = require("jsonwebtoken");

// module.exports = (req, res, next) => {
//   console.log(req.body, "Middleware", req.headers);

//   const header = req.headers["authorization"];
//   console.log(header);
//   if (typeof header !== "undefined") {
//     const bearer = header.split(" ");
//     const token = bearer[1];
//     console.log(token);
//     req.token = token;
//     jwt.verify(token, process.env.SECRET, (err, authorizedData) => {
//       if (err) {
//         //If error send Forbidden (403)
//         console.log("ERROR: Could not connect to the protected route");
//         res.sendStatus(403);
//       } else {
//         next();
//       }
//     });
//   } else {
//     //If header is undefined return Forbidden (403)
//     res.sendStatus(403);
//   }
// };

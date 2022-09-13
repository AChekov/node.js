// const fs = require("fs/promises");
// const fs = require("fs").promises;

// const filepath = "./db/contacts.json";

// const fileOperation = async ({ action }) => {
//   switch (action) {
//     case "read":
//       const result = await fs.readFile(filepath);
//       console.log(result);
//       break;

//     default:
//       console.log("Unknown action");
//   }
// };

// fileOperation({ action: "read" });

// fs.readFile("./db/contacts.json")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fs.readFile("./db/contacts.json", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

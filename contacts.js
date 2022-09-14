const contactsPath = require("./db/contactPath");

const fs = require("fs/promises");
// const fs = require("fs").promises;
// const { v4 } = require("uuid");

const getAll = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

module.exports = { getAll };

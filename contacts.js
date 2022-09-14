const contactsPath = require("./db/contactsPath");

const fs = require("fs/promises");
// const fs = require("fs").promises;
const { v4 } = require("uuid");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};

const getContactById = async (id) => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  const result = contacts.find((contact) => contact.id === id);
  if (!result) return null;
  return result;
};

const addNewContact = async (data) => {
  const newContact = { ...data, id: v4() };
  const contacts = await listContacts();
  contacts.push(newContact);

  return newContact;
};

module.exports = { listContacts, getContactById, addNewContact };

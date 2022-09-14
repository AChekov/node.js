const contactsOperations = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const contacts = await contactsOperations.getAll();
      console.table(contacts);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

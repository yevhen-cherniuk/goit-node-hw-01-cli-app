const fs = require("fs").promises;
const path = require("path");
const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "db/contacts.json");

const listContacts = async () => {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        throw error.message;
    }
};

const getContactById = async (contactId) => {
    try {
        const contacts = await listContacts();
        const requiredContact = contacts.find(
            (contact) => contact.id === +contactId
        );
        if (!requiredContact) {
            throw new Error(`Contacts with id=${contactId} not found`);
        }
        return requiredContact;
    } catch (error) {
        throw error;
    }
};

const removeContact = async (contactId) => {
    try {
        const data = await fs.readFile(contactsPath);
        const contacts = JSON.parse(data);
        const filteredContacts = contacts.filter(
            (contact) => contact.id !== Number(contactId)
        );
        await fs.writeFile(contactsPath, JSON.stringify(filteredContacts));
        console.table(filteredContacts);
    } catch (error) {
        console.log(error.message);
    }
}

const addContact = async (name, email, phone) => {
    try {
        const contacts = await listContacts();
        const newContact = {
            id: v4(),
            name,
            email,
            phone,
        };
        contacts.push(newContact);
        await fs.writeFile(contactsPath, JSON.stringify(contacts));
        return console.table(contacts);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
};
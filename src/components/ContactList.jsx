import { useSelector } from "react-redux";
import Contact from "./Contact";

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters);

  const filteredContacts = contacts.filter(contact =>
    typeof contact.name === "string" &&
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;


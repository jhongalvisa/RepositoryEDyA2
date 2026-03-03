import { useEffect, useState } from "react";
import Loader from "./Loader";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

type Contact = {
  name: string;
  phone: string;
};

const initialContacts: Contact[] = [
  { name: "Manuel", phone: "3000000000" },
  { name: "Juan", phone: "3111111111" },
  { name: "Sofi", phone: "3222222222" },
];

function ContactsApp() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Simula carga inicial (loader al inicio)
  useEffect(() => {
    const timer = setInterval(() => {
      setContacts(initialContacts);
      setLoading(false);
      clearInterval(timer);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const addContact = (name: string, phone: string) => {
    const nuevo = { name, phone };
    setContacts((prev) => [...prev, nuevo]);
  };

  const deleteContact = (index: number) => {
    // Creamos un arreglo nuevo sin ese elemento (misma idea: actualizar estado con un nuevo array)
    setContacts((prev) => prev.filter((_, i) => i !== index));
  };

  if (loading) return <Loader />;

  return (
    <>
      <h2>Contacts</h2>
      <ContactForm onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
    </>
  );
}

export default ContactsApp;
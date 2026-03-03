interface Contact {
  name: string;
  phone: string;
}

interface Props {
  contacts: Contact[];
  onDelete: (index: number) => void;
}

function ContactList({ contacts, onDelete }: Props) {
  return (
    <>
      <ol>
        {contacts.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - {item.phone}
              <button onClick={() => onDelete(index)}>Delete</button>
            </li>
          );
        })}
      </ol>
    </>
  );
}

export default ContactList;
import { useState } from "react";

interface Props {
  onAdd: (name: string, phone: string) => void;
}

function ContactForm({ onAdd }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const add = () => {
    onAdd(name, phone);
    setName("");
    setPhone("");
  };

  return (
    <>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button onClick={add}>Add</button>
    </>
  );
}

export default ContactForm;
import PersonaATMUI from "./PersonaATMUI";

type Challenge05PageProps = {
  goBack: () => void;
};

function Challenge05Page({ goBack }: Challenge05PageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Challenge 05</h1>

      <button onClick={goBack}>Volver al Dashboard</button>

      <hr />

      <PersonaATMUI />
    </div>
  );
}

export default Challenge05Page;
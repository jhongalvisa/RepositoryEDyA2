import LibrosUI from "./LibrosUI";

type Challenge04PageProps = {
  goBack: () => void;
};

function Challenge04Page({ goBack }: Challenge04PageProps) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Challenge 04</h1>

      <button onClick={goBack}>Volver al Dashboard</button>

      <hr />

      <LibrosUI />
    </div>
  );
}

export default Challenge04Page;
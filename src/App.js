import H1 from "./components/H1";
export default function App() {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      id="main-app-wrapper"
      className="main-app-wrapper"
    >
      <h1 className="font-black text-6xl">Hello World</h1>
      <H1>Hello World Two</H1>
    </div>
  );
}

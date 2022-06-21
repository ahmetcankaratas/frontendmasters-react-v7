import { render } from "react-dom";
import Pet from "./Pet.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Coban" animal="Dog" breed="Kangal" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Incir" animal="Cat" breed="British Shorthair" />
    </div>
  )
}

render(<App />, document.getElementById("root"));

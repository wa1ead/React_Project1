import Image from "./components/Image";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";

function App() {
  return (
    <div className="App">
      <h3>Hello WALID!</h3>
      <div>
        <Image />
        <Name />
        <Description />
        <Price />
      </div>
    </div>
  );
}

export default App;

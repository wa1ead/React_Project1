import Image from "./components/Image";
import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";

function App() {
  return (
    <div className="App">
        <h3>Hello WALID!</h3>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div className="group relative">
          <Image />
          <div className="mt-4 flex justify-between">
            <div>
              <Name />
              <Description />
            </div>
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

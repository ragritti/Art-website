import Header from "./Components/Header";
import Home from "./Home";
import Artist from "./Components/Artist";
import './index.css';
import Sliderr from "./Components/Slider";
import Footer from "./Components/Footer";

function App() {
  // const cards = masterData.categories.map(category => {
  //   return category.data.map(item => (
  //     <Cards 
  //       key={item.id} 
  //       image={item.imageUrl}
  //       title={item.title}
  //       price={item.price}
  //     />
  //   ));
  // });
  return (
    <div className="flex flex-col">
        <div className="pt-14">
          <Header />
        </div>
        {/* <div>
          <Home />
        </div> */}
        <div className="flex justify-center text-center mt-12 px-6" id="collections">
          <h1 className="text-4xl font-medium text-gray-950">Discover the Art you love!</h1>
        </div>
        <div className="flex text-center mt-12 mb-8 justify-center">
          <h2 className="text-3xl font-normal text-gray-950">Shop by category</h2>
        </div>
        <div>
        <Sliderr/>
        </div>
        <div>
          <Artist/>
        </div>
        <div>
          <Footer/>
        </div> 
        </div>
  );
}

export default App;

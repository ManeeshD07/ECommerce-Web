import { Carousel, Footer, Links, Navbar, NewArrival, NewsLetter } from "./components";

function App() {
  return (
    <nav>
      <Navbar/>
      {/* <Carousel/> */}
      <NewArrival/>
      <Links/>
      <Footer/>
    </nav>
  );
}

export default App;

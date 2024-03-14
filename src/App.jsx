import Ex_Binding from "./Ex_Binding/Ex_Binding";
import Ex_DemoState from "./Ex_DemoState/Ex_DemoState";
import Ex_Event from "./Ex_Event/Ex_Event";
import Ex_ShoeShop from "./Ex_ShoeShop/Ex_ShoeShop";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import DemoBootstrap from "./demoBootstrap/DemoBootstrap";

function App() {
  return (
    <>
      {/* <Header />
      <div style={{ display: "flex", height: "50vh" }}>
        <Navigation />
        <Content />
      </div>
      <Footer /> */}
      {/* <DemoBootstrap /> */}
      {/* <h1 className="demoText">Tôi tên tailwind css</h1> */}
      {/* <Ex_Binding /> */}
      {/* <Ex_Event /> */}
      {/* <Ex_DemoState /> */}
      <Ex_ShoeShop />
    </>
  );
}

export default App;

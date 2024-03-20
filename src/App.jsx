import Ex_Binding from "./Ex_Binding/Ex_Binding";
import Ex_DemoState from "./Ex_DemoState/Ex_DemoState";
import Ex_Event from "./Ex_Event/Ex_Event";
import Ex_ReactRouter from "./Ex_ReactRouter/Ex_ReactRouter";
import Ex_Redux from "./Ex_Redux/Ex_Redux";
import Ex_ShoeShop from "./Ex_ShoeShop/Ex_ShoeShop";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import DemoBootstrap from "./demoBootstrap/DemoBootstrap";
import { Routes, Route, useRoutes } from "react-router-dom";
import HomeTemplate from "./template/HomeTemplate/HomeTemplate";
import NotFound from "./layout/NotFound/NotFound";
import Ex_LifeCycle from "./Ex_LifeCycle/Ex_LifeCycle";
function App() {
  const route = useRoutes([
    // Route chứa component HomeTemplate
    {
      path: "/",
      element: <HomeTemplate />,
      children: [
        {
          element: <Ex_LifeCycle />,
          index: true,
        },
        {
          path: "shoe-shop",
          element: <Ex_ShoeShop />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return route;
  {
    /* <Header />
      <div style={{ display: "flex", height: "50vh" }}>
        <Navigation />
        <Content />
      </div>
      <Footer /> */
  }
  {
    /* <DemoBootstrap /> */
  }
  {
    /* <h1 className="demoText">Tôi tên tailwind css</h1> */
  }
  {
    /* <Ex_Binding /> */
  }
  {
    /* <Ex_Event /> */
  }
  {
    /* <Ex_DemoState /> */
  }
  {
    /* <Ex_ShoeShop /> */
  }
  {
    /* <Ex_Redux /> */
  }

  {
    /* <Routes> */
  }
  {
    /* <Route path="/redux" element={<Ex_Redux />} />
        <Route path="/" element={<Ex_ReactRouter />} />
        <Route path="/shoe-detail/:id" element={<Ex_ShoeShop />} /> */
  }

  {
    /* <Route path="/" element={<HomeTemplate />}>
          <Route element={<Ex_Redux />} index></Route>
          <Route element={<Ex_ShoeShop />} path="shoe-shop"></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes> */
  }
}

export default App;

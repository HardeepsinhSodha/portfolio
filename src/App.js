import React, {Suspense, lazy} from "react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";

const Home = lazy(()=>import("./components/pages/home/Home"))
const PageNotFound = lazy(()=>import("./components/pages/page-not-found/PageNotFound"))
const Layout = lazy(()=>import("./components/layout/Layout"))
const PrivateRoute = () => {
  return <Layout><Outlet /></Layout>;
};

function App() {
  return (
    <BrowserRouter basename={process.env.REACT_APP_BASENAME ?? ""}>
        <Suspense
            fallback={<div>Loading...</div>}
          >
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route index element={<Home />} />
              
            </Route>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </Suspense>
    </BrowserRouter>
  );
}

export default App;

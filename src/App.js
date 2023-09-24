import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm";
import Home from "./Components/Home";
import Vans from "./Components/Vans";
import VanDetails from "./Components/VanDetails";
import Layout from "./Components/Layout";
import Dashboard from "./Components/Host/Dashboard";
import Reviews from "./Components/Host/Reviews";
import Income from "./Components/Host/Income";
import Hostvans from "./Components/Host/Hostvans";
import Hostlayout from "./Components/Hostlayout/Hostlayout";
import Hostvansdetails from "./Components/Host/Hostvansdetails";
import Hostphotos from "./Components/Hostpricingphotos/Hostphotos";
import Hostpricing from "./Components/Hostpricingphotos/Hostpricing";
import Hostvaninfo from "./Components/Hostpricingphotos/Hostvaninfo";
import "./server";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="login" element={<LoginForm />} />
            <Route index element={<Home />} />
            <Route path="vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetails />} />
            <Route path="host" element={<Hostlayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<Hostvans />} />
              <Route path="vans/:id" element={<Hostvansdetails />}>
                <Route index element={<Hostvaninfo />} />
                <Route path="pricing" element={<Hostpricing />} />
                <Route path="photos" element={<Hostphotos />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

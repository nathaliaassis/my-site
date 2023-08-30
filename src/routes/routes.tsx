import { BrowserRouter, Routes as RoutesDOM, Route } from "react-router-dom";
import HomePage from "@/pages/home/home";
// import RelayPage from "@/pages/relay/relay";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesDOM>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="relay" element={<RelayPage />} /> */}
      </RoutesDOM>
    </BrowserRouter>
  );
}

export default Routes;

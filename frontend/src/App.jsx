import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InvitedLeads from "./pages/InvitedLeads";
import AcceptedLeads from "./pages/AcceptedLeads";
import "./css/App.css";

function App() {
  return (
    <Router>
      <div className="leadsContainer">
        <nav className="navBar">
          <Link to="/">Invited Leads</Link> | 
          <Link to="/accepted"> Accepted Leads</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div >
              <InvitedLeads /> 
            </div>
            }
            />
          <Route path="/accepted" element={<AcceptedLeads />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
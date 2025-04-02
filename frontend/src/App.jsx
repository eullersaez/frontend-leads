import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import InvitedLeads from "./pages/InvitedLeads";
import AcceptedLeads from "./pages/AcceptedLeads";

function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "stretch", marginTop: 60 }}>
        <nav style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
          padding: "10px",
          textAlign: "center",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)"
        }}>
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
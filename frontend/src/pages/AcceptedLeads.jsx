import { useEffect, useState } from "react";
import { getAcceptedLeads } from "../services/leadService";
import LeadCard from "../components/LeadCard";
import "../css/AcceptedLeads.css";

const AcceptedLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getAcceptedLeads().then(setLeads);
  }, []);

  return (
    <div className="acceptedLeads">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} isInvited={false} />
      ))}
    </div>
  );
};

export default AcceptedLeads;

import { useEffect, useState } from "react";
import { getAcceptedLeads } from "../services/leadService";
import LeadCard from "../components/LeadCard";

const AcceptedLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getAcceptedLeads().then(setLeads);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        flexGrow: 1,
      }}
    >
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} isInvited={false} />
      ))}
    </div>
  );
};

export default AcceptedLeads;

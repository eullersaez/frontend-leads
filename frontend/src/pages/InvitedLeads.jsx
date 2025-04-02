import { useEffect, useState } from "react";
import {
  getInvitedLeads,
  acceptLead,
  declineLead,
} from "../services/leadService";
import LeadCard from "../components/LeadCard";

const InvitedLeads = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    getInvitedLeads().then(setLeads);
  }, []);

  const handleAccept = async (id) => {
    await acceptLead(id);
    setLeads(leads.filter((lead) => lead.id !== id));
  };

  const handleDecline = async (id) => {
    await declineLead(id);
    setLeads(leads.filter((lead) => lead.id !== id));
  };

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
        <LeadCard
          key={lead.id}
          lead={lead}
          onAccept={handleAccept}
          onDecline={handleDecline}
        />
      ))}
    </div>
  );
};

export default InvitedLeads;

import { Button, Card, CardContent, Typography } from "@mui/material";

const LeadCard = ({ lead, onAccept, onDecline, isInvited = true }) => {
  const date = new Date(lead.createdAt);
  const formattedDate = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        {isInvited && (
          <Typography variant="h6">{lead.contactFirstName}</Typography>
        )}
        {!isInvited && (
          <div>
            <Typography variant="h6">{lead.contact.name}</Typography>
            <Typography>Phone: {lead.contact.phone}</Typography>
            <Typography>Email: {lead.contact.email}</Typography>
          </div>
        )}

        <Typography>Job id: {lead.id}</Typography>
        <Typography>Created at: {formattedDate}</Typography>
        <Typography>Suburb: {lead.suburb}</Typography>
        <Typography>Category: {lead.category}</Typography>
        <Typography>{lead.description}</Typography>
        <Typography>${lead.price.toFixed(2)}</Typography>

        {isInvited && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "8px",
              marginTop: "10px",
            }}
          >
            <Button color="success" onClick={() => onAccept(lead.id)}>
              Accept
            </Button>
            <Button color="error" onClick={() => onDecline(lead.id)}>
              Decline
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadCard;

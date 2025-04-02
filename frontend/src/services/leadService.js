import api from "./api";

export const getInvitedLeads = async () => {
  const response = await api.get("/getInvitedLeads");
  return response.data;
};

export const getAcceptedLeads = async () => {
  const response = await api.get("/getAcceptedLeads");
  return response.data;
};

export const acceptLead = async (id) => {
  await api.patch(`/${id}/acceptLead`);
};

export const declineLead = async (id) => {
  await api.patch(`/${id}/declineLead`);
};

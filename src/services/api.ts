import axios from "axios";
import { GetTeam } from "src/types/team";
import { GetTeams } from "src/types/team";

export const api = axios.create({
  baseURL: "https://api-products-dh-next.vercel.app",
});

export const service = {
  getTeams: async () => {
    const { data } = await api.get<GetTeams>("/teams");
    return data;
  },
  getTeam: async (id: string) => {
    const { data } = await api.get<GetTeam>(`/teams/${id}`);
    return data;
  },
};

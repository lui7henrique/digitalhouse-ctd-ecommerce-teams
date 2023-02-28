export type Team = {
  _id: string;
  name: string;
  __v: number;
  image: string;
};

export type GetTeams = Array<Team>;

export type GetTeam = {
  response: FullTeam;
};

export type FullTeam = {
  id: string;
  name: string;
  image: string;
  description: string;
};

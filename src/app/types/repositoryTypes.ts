export type Repository = {
  id: string;
  name: string;
  description: string;
  url: string;
  homepage: string;
  language: string;
  license: string;
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  createdAt: string;
  updatedAt: string;
  owner: {
    login: string;
  };
};

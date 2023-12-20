import { Octokit } from '@octokit/core';

const octokit = new Octokit({
  auth: ''
});

export const repo = {
  query: async (inputValue: string) => {
    const response = await octokit.request('GET /search/repositories', {
      q: inputValue
    });
    return response.data;
  },
  queryRank: async (repo: any) => {
    const response = await octokit.request(
      `GET /repos/${repo.owner.login}/${repo.name}/contributors`
    );
    return response.data;
  },
  queryPulls: async (repo: any) => {
    const response = await octokit.request(`GET /repos/${repo.owner.login}/${repo.name}/pulls`, {
      state: 'all'
    });
    return response.data;
  }
};

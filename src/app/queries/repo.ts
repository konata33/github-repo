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
  }
};

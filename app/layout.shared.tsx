import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const appName = 'Competitive Codebase 101';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'siddharthgoli',
  repo: 'competitivecodebase101',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

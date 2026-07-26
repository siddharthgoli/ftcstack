import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const appName = "FTC Code Companion";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";
export const docsContentRoute = "/llms.mdx/docs";
export const logoSrc = "/db-logo.png";

export const gitConfig = {
    user: "siddharthgoli",
    repo: "ftccodecompanion",
    branch: "main",
};

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: (
                <>
                    <img
                        className="size-12"
                        src={logoSrc}
                        alt="Don't Blink Logo"
                    />
                    <span>{appName}</span>
                </>
            ),
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    };
}

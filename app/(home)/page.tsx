import Link from "next/link";
import {
    ArrowRight,
    Blocks,
    BrainCircuit,
    BookOpenText,
    Code2,
    Cpu,
    Gauge,
    GitBranch,
    SearchCode,
    Sparkles,
    Target,
} from "lucide-react";

const learningPaths = [
    {
        title: "Beginner Path",
        description:
            "Learn FTC programming fundamentals, from Java and the SDK to your first working robot program.",
        href: "/docs/learn/getting-started",
        accent: "from-sky-400/20 to-cyan-400/5",
        icon: BookOpenText,
        steps: [
            "FTC fundamentals",
            "Java essentials",
            "SDK setup",
            "Your first OpMode",
        ],
    },
    {
        title: "Programming Path",
        description:
            "Build software like a competitive FTC team with organized, maintainable robot code.",
        href: "/docs/programming/teleop",
        accent: "from-emerald-400/20 to-teal-400/5",
        icon: Blocks,
        steps: [
            "Code architecture",
            "Subsystem design",
            "TeleOp systems",
            "Autonomous structure",
        ],
    },
    {
        title: "Advanced Path",
        description:
            "Explore the systems that separate functional robots from competition-ready robots.",
        href: "/docs/control-theory/open-closed",
        accent: "from-amber-400/20 to-orange-400/5",
        icon: BrainCircuit,
        steps: [
            "PID control",
            "Feedforward",
            "Vision pipelines",
            "Motion planning",
        ],
    },
];

const featureHighlights = [
    {
        title: "FTC-focused learning",
        description:
            "Concepts are explained through real robot applications, not abstract examples.",
        icon: Target,
    },
    {
        title: "Engineering practices",
        description:
            "Learn version control, architecture, naming conventions, and team workflows.",
        icon: GitBranch,
    },
    {
        title: "Debugging tools",
        description:
            "Use telemetry, dashboards, logs, and measurements to diagnose problems.",
        icon: SearchCode,
    },
    {
        title: "Reusable code",
        description:
            "Build a library of patterns for mechanisms, autonomous, and utilities.",
        icon: Code2,
    },
];

const sectionCards = [
    {
        title: "Learn",
        description: "Start with FTC concepts, Java, and SDK fundamentals.",
        href: "/docs/learn/getting-started",
        icon: Sparkles,
    },
    {
        title: "Programming",
        description: "Learn how competitive teams structure robot software.",
        href: "/docs/programming/teleop",
        icon: Cpu,
    },
    {
        title: "Control Theory",
        description: "Understand feedback systems, tuning, and robot motion.",
        href: "/docs/control-theory/open-closed",
        icon: Gauge,
    },
    // {
    //     title: "Vision",
    //     description:
    //         "FTC camera pipelines, detection systems, and real-world debugging.",
    //     href: "/docs/vision",
    //     icon: ShieldCheck,
    // },
    // {
    //     title: "Snippets",
    //     description:
    //         "Implementation templates and patterns you can drop into a codebase.",
    //     href: "/docs/snippets",
    //     icon: Wrench,
    // },
    {
        title: "Reference",
        description: "Libraries, tools, resources, and quick documentation.",
        href: "/docs/reference/resources",
        icon: BookOpenText,
    },
];

export default function HomePage() {
    return (
        <main className="relative flex-1 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_30%),radial-gradient(circle_at_left_top,rgba(14,165,233,0.18),transparent_28%)]" />

            <section className="mx-auto flex max-w-7xl flex-col gap-20 px-6 py-16 md:px-10 lg:px-12 lg:py-24">
                <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-8">
                        <div className="space-y-5">
                            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-balance text-fd-foreground md:text-6xl lg:text-7xl">
                                Learn to program FTC robots like a competitive
                                software team.
                            </h1>

                            <p className="max-w-2xl text-lg leading-8 text-fd-muted-foreground md:text-xl">
                                FTC Code Companion is a complete programming
                                curriculum covering Java, the FTC SDK, robot
                                architecture, autonomous systems, control
                                theory, and vision.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/docs"
                                className="inline-flex items-center gap-2 rounded-full bg-fd-primary px-5 py-3 text-sm font-medium text-fd-primary-foreground transition-transform hover:-translate-y-0.5"
                            >
                                Start Learning
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="cc101-glow absolute inset-0 -z-10 rounded-[2rem] blur-3xl" />

                        <div className="cc101-panel rounded-[2rem] p-6 md:p-8">
                            <div className="mb-6 flex justify-between text-sm text-fd-muted-foreground">
                                <span>FTC Code Companion</span>
                                <span>Java • FTC SDK • Control</span>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    [
                                        "Learn",
                                        "Understand FTC, Java, and the SDK.",
                                    ],
                                    [
                                        "Build",
                                        "Create organized robot software.",
                                    ],
                                    ["Tune", "Improve motion and mechanisms."],
                                    [
                                        "Compete",
                                        "Ship reliable season-ready code.",
                                    ],
                                ].map(([title, description]) => (
                                    <div
                                        key={title}
                                        className="rounded-2xl border border-fd-border bg-fd-card/80 p-4"
                                    >
                                        <p className="font-medium text-fd-foreground">
                                            {title}
                                        </p>
                                        <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                                            {description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {learningPaths.map((path) => {
                        const Icon = path.icon;

                        return (
                            <Link
                                key={path.title}
                                href={path.href}
                                className="group rounded-[1.5rem] border border-fd-border bg-fd-card/80 p-6 transition-all hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-xl"
                            >
                                <div
                                    className={`rounded-2xl bg-gradient-to-br ${path.accent} p-4`}
                                >
                                    <Icon className="h-5 w-5 text-sky-300" />
                                </div>

                                <h2 className="mt-5 text-xl font-semibold text-fd-foreground">
                                    {path.title}
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                                    {path.description}
                                </p>

                                <ul className="mt-5 space-y-2 text-sm text-fd-muted-foreground">
                                    {path.steps.map((step) => (
                                        <li
                                            key={step}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        );
                    })}
                </div>

                <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {featureHighlights.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="rounded-[1.35rem] border border-fd-border bg-fd-card/80 p-5"
                                >
                                    <Icon className="h-5 w-5 text-sky-400" />

                                    <h3 className="mt-4 font-semibold text-fd-foreground">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="cc101-panel rounded-[1.75rem] p-6 md:p-8">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
                            Documentation
                        </p>

                        <h2 className="mt-3 text-2xl font-semibold text-fd-foreground">
                            Everything organized by purpose
                        </h2>

                        <p className="mt-3 text-sm leading-7 text-fd-muted-foreground">
                            Follow the curriculum from beginner concepts to
                            advanced systems, or jump directly to the reference
                            material you need.
                        </p>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {sectionCards.map((section) => {
                                const Icon = section.icon;

                                return (
                                    <Link
                                        key={section.title}
                                        href={section.href}
                                        className="rounded-2xl border border-fd-border bg-fd-card/80 p-4 hover:border-sky-400/40"
                                    >
                                        <Icon className="h-5 w-5 text-sky-400" />

                                        <h3 className="mt-3 font-semibold text-fd-foreground">
                                            {section.title}
                                        </h3>

                                        <p className="mt-2 text-sm text-fd-muted-foreground">
                                            {section.description}
                                        </p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

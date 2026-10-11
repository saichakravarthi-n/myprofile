/**
 * Portfolio content — sourced from resume.
 * Edit freely; redeploy to Vercel after changes.
 */

export const profile = {
  name: "Sai Chakravarthi",
  firstName: "Sai",
  formalName: "N Sai Chakravarthi",
  title: "Software Engineer 2",
  tagline:
    "Backend & microservices engineer building real-time data platforms at bigbasket — Python, Django, Node.js.",
  location: "Bengaluru, India",
  email: "saichakravarthi.n@gmail.com",
  phone: "+91 99590 81586",
  resumeUrl: "mailto:saichakravarthi.n@gmail.com?subject=Resume%20request",
  social: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/saichakravarthi",
    twitter: "https://www.linkedin.com/in/saichakravarthi",
  },
  about: {
    lead: "I build the systems that power real-time decisions for thousands of vendors and tenants across India’s largest online grocery platform.",
    paragraphs: [
      "At bigbasket I’m a Software Engineer 2 focused on backend architecture, microservices, and data platforms that stay reliable under production load. I currently lead backend development on Stitch — an internal report-generation engine that aggregates data from multiple RDS sources, enforces user-level access control, and delivers dynamic reports at scale.",
      "The platform handles thousands of report runs daily and drives automated email and push notifications to vendor stakeholders. I also manage five microservices on the Vision team, with a continuous focus on performance, reliability, and clean architecture.",
      "I’m drawn to problems at the intersection of data, systems design, and user impact — and I thrive on teams that care about engineering quality. Open to connecting with engineers, PMs, and founders building at scale.",
    ],
  },
  stats: [
    { label: "Years experience", value: "7+" },
    { label: "Microservices owned", value: "5" },
    { label: "Daily report runs", value: "1000s" },
  ],
  skills: [
    {
      category: "Backend",
      items: [
        "Python",
        "Django",
        "Node.js",
        "PHP / CodeIgniter",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "Data & messaging",
      items: [
        "Amazon SQS",
        "Kafka",
        "MySQL / RDS",
        "Real-time system design",
        "Multi-source aggregation",
        "Notification pipelines",
      ],
    },
    {
      category: "Platform & frontend",
      items: [
        "AWS",
        "React.js",
        "Admin UI / tooling",
        "Linux",
        "Git & GitHub",
        "Jenkins / CI",
      ],
    },
  ],
  experience: [
    {
      company: "bigbasket",
      role: "Software Engineer 2",
      period: "May 2026 — Present",
      summary:
        "Leading backend architecture and feature development for Stitch, bigbasket’s internal real-time report generation platform serving vendor stakeholders across the organisation.",
      highlights: [
        "Designed and shipped a privilege-based report engine that dynamically generates thousands of reports across multi-RDS data sources with strict user-level access control",
        "Built automated email and push notification pipelines for timely report delivery to stakeholders",
        "Developed the admin UI (Python, Django, Node.js) so non-technical users can configure and trigger reports independently",
        "Improved platform reliability and scalability for growing vendor and tenant demand",
      ],
    },
    {
      company: "bigbasket",
      role: "Software Engineer 1",
      period: "May 2023 — May 2026",
      summary:
        "Contributed to Stitch (report generation) and Vision (microservices), shipping backend features in a large-scale production environment.",
      highlights: [
        "Delivered key Stitch modules: multi-source data integration, dynamic report templates, and notification workflows",
        "Managed and enhanced 5 microservices on the Vision team with focus on performance and reliability",
        "Worked across PHP, CodeIgniter, Python, Django, JavaScript, MySQL, and REST APIs in a distributed architecture",
        "Collaborated with a cross-functional team of 8 engineers on tight release cycles",
      ],
    },
    {
      company: "bigbasket.com",
      role: "Technical Operations Executive",
      period: "Jul 2021 — Dec 2022",
      summary:
        "Supported technical operations for India’s largest online grocery platform before moving into the engineering track.",
      highlights: [
        "Built operational fluency across catalog, vendor, and platform workflows",
        "Bridged business needs and technical execution in a high-volume retail environment",
      ],
    },
    {
      company: "bigbasket.com",
      role: "Business Development Executive",
      period: "Jul 2019 — Jul 2021",
      summary:
        "Grew vendor and business relationships, developing the product and stakeholder instincts that still shape how I design backend systems.",
      highlights: [
        "Worked directly with stakeholders who later became users of the platforms I engineer",
        "Learned to translate operational pain into product requirements",
      ],
    },
  ],
  education: [
    {
      school: "Sri Mittapalli College of Engineering",
      degree: "Bachelor of Technology — B.Tech",
      period: "2015 — 2019",
    },
    {
      school: "Narayana Junior College",
      degree: "Intermediate — MPC",
      period: "2013 — 2015",
    },
  ],
  projects: [
    {
      slug: "stitch",
      name: "Stitch",
      year: "2023 — Present",
      role: "Lead backend · bigbasket",
      summary:
        "Internal real-time report engine aggregating multi-RDS data with privilege-based access — thousands of runs daily for vendor stakeholders.",
      description:
        "Stitch is bigbasket’s internal report-generation platform. It pulls from multiple RDS sources, applies strict user-level access control, renders dynamic report templates, and delivers results through automated email and push notifications. I lead backend architecture and feature development, and built the admin UI that lets non-technical users configure and trigger reports on their own.",
      problem:
        "Vendor and tenant stakeholders needed trustworthy, on-demand reporting across fragmented data stores — without engineering bottlenecks or leaking privileged data.",
      approach: [
        "Designed a privilege-aware report engine over multiple RDS sources",
        "Shipped dynamic templates and multi-source aggregation modules",
        "Built email and push notification pipelines for automated delivery",
        "Delivered an admin UI in Python, Django, and Node.js for self-serve configuration",
        "Hardened reliability and scale as vendor and tenant demand grew",
      ],
      outcome: [
        "Thousands of report runs handled daily in production",
        "Non-technical users can configure and trigger reports independently",
        "Timely stakeholder delivery via email and push notifications",
      ],
      stack: ["Python", "Django", "Node.js", "MySQL / RDS", "SQS", "REST APIs"],
      accent: "#1FA97A",
      liveUrl: "https://www.bigbasket.com",
      githubUrl: "https://www.linkedin.com/in/saichakravarthi",
    },
    {
      slug: "vision",
      name: "Vision",
      year: "2023 — Present",
      role: "Backend engineer · bigbasket",
      summary:
        "Ownership of five production microservices — performance, reliability, and clean architecture in a distributed grocery platform.",
      description:
        "On the Vision team I manage and enhance five microservices that sit inside bigbasket’s distributed architecture. The work spans PHP/CodeIgniter legacy surfaces and modern Python/Django services, with continuous attention to latency, failure modes, and maintainable APIs.",
      problem:
        "Core product flows depended on multiple services that needed to stay fast and reliable while the platform and team scaled.",
      approach: [
        "Owned end-to-end health of five microservices in production",
        "Optimised hot paths and improved system reliability under load",
        "Worked across PHP, CodeIgniter, Python, Django, JavaScript, and MySQL",
        "Shipped features with a cross-functional team of eight on tight release cycles",
      ],
      outcome: [
        "Sustained ownership of critical production services",
        "Performance and reliability improvements shipped iteratively",
        "Cleaner service boundaries inside a growing microservices estate",
      ],
      stack: ["Python", "Django", "PHP", "CodeIgniter", "MySQL", "REST APIs"],
      accent: "#E85D04",
      liveUrl: "https://www.bigbasket.com",
      githubUrl: "https://www.linkedin.com/in/saichakravarthi",
    },
    {
      slug: "realtime-notifications",
      name: "Realtime Notifications",
      year: "2024 — Present",
      role: "Backend · Stitch platform",
      summary:
        "Automated email and push pipelines that turn report completion into timely stakeholder signal — not another ignored inbox dump.",
      description:
        "Report value dies if delivery is late or noisy. I built the notification layer that fans out Stitch outputs to the right vendor stakeholders through email and push, wired into the same privilege model as the report engine.",
      problem:
        "Stakeholders needed report results the moment they were ready — with the right audience, channel, and access guarantees.",
      approach: [
        "Designed automated email and push notification workflows",
        "Tied delivery to report completion and access control rules",
        "Integrated with existing messaging infrastructure (SQS and related services)",
        "Iterated with stakeholders on timing and signal quality",
      ],
      outcome: [
        "Timely delivery of reports to vendor stakeholders",
        "Reduced manual follow-up from ops and engineering",
        "Notification path aligned with privilege-based report access",
      ],
      stack: ["Python", "Django", "Amazon SQS", "Push", "Email"],
      accent: "#2B6CB0",
      liveUrl: "https://www.linkedin.com/in/saichakravarthi",
      githubUrl: "https://www.linkedin.com/in/saichakravarthi",
    },
  ],
  languages: [
    { name: "Telugu", level: "Native" },
    { name: "English", level: "Full professional" },
  ],
  certifications: [
    "Learning Git and GitHub",
    "Linux: Overview and Installation",
    "Jenkins",
    "Learning Linux Command Line",
  ],
} as const;

export type Project = (typeof profile.projects)[number];

export function getProject(slug: string): Project | undefined {
  return profile.projects.find((p) => p.slug === slug);
}

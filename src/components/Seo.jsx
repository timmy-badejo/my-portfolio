import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const siteUrl = "https://timmybad.com";
const siteName = "Timmy Bad";
const defaultImage = `${siteUrl}/logo512.png`;
const defaultTitle = "Timmy Bad | Visual Designer & Front-End Developer";
const defaultDescription =
  "Timmy Bad is the portfolio of Timilehin Yomi-Badejo, a Vancouver-based visual designer and front-end designer/developer creating brand systems, UI/UX, and responsive web experiences.";
const notFoundMeta = {
  title: "Page Not Found | Timmy Bad",
  description:
    "This Timmy Bad portfolio page could not be found. Browse selected work, services, about, contact, and studio system pages.",
};

const pageMeta = {
  "/": {
    title: defaultTitle,
    description: defaultDescription,
  },
  "/work": {
    title: "Work | Timmy Bad Portfolio",
    description:
      "Selected portfolio projects by Timilehin Yomi-Badejo across visual design, UI/UX, front-end development, motion, branding, and web design.",
  },
  "/services": {
    title: "Services | Timmy Bad",
    description:
      "Design and front-end services from Timmy Bad, including brand identity, web design, UI/UX, motion content, and creative strategy.",
  },
  "/about": {
    title: "About Timilehin Yomi-Badejo | Timmy Bad",
    description:
      "Learn about Timilehin Yomi-Badejo, a Vancouver-based visual designer and front-end designer/developer focused on brand systems, UI/UX, and polished digital work.",
  },
  "/contact": {
    title: "Contact | Timmy Bad",
    description:
      "Contact Timilehin Yomi-Badejo for visual design, front-end development, branding, UI/UX, portfolio work, collaborations, internships, and opportunities.",
  },
  "/bcrpa": {
    title: "BCRPA Internship Experience | Timmy Bad",
    description:
      "A BCRPA internship case study by Timilehin Yomi-Badejo covering visual communication, event design, signage, print collateral, and brand support.",
  },
  "/studio-system": {
    title: "Studio System | Timmy Bad",
    description:
      "The skills, tools, process, and services behind Timmy Bad portfolio work, spanning visual design, UI/UX, brand systems, and front-end development.",
  },
};

function upsertMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

function getRouteMeta(pathname) {
  const projectMatch = pathname.match(/^\/projects\/([^/]+)$/);

  if (projectMatch) {
    const project = projectsData.find((item) => item.id === projectMatch[1]);

    if (project) {
      return {
        title: `${project.title} | Timmy Bad Portfolio`,
        description: project.description,
      };
    }
  }

  return pageMeta[pathname] || notFoundMeta;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
    const meta = getRouteMeta(normalizedPath);
    const canonical = `${siteUrl}${normalizedPath === "/" ? "/" : normalizedPath}`;

    document.title = meta.title;

    upsertCanonical(canonical);
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", defaultImage);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);
    upsertMeta("name", "twitter:image", defaultImage);
  }, [pathname]);

  return null;
}

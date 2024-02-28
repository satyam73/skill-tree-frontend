import { RDS_BACKEND_URL } from "@/constants/urls";
import { NavbarLink } from "./navbar.types";

// ?v2=true so that we get rds-session-v2 cookie from RDS backend
export const SIGNIN_URL = `${RDS_BACKEND_URL}/auth/github/login?redirectURL=${process.env.NEXT_PUBLIC_SKILL_TREE_SITE}?v2=true`;

export const NAVBAR_LINKS: NavbarLink[] = [
    {
        id: "welcome-site-link",
        name: "Welcome",
        link: process.env.NEXT_PUBLIC_WELCOME_SITE,
    },
    {
        id: "events-site-link",
        name: "Events",
        link: `${process.env.NEXT_PUBLIC_WWW_SITE}/events`,
    },
    {
        id: "members-site-link",
        name: "Members",
        link: process.env.NEXT_PUBLIC_MEMBERS_SITE,
    },
    {
        id: "status-site-link",
        name: "Status",
        link: process.env.NEXT_PUBLIC_STATUS_SITE,
    },
];

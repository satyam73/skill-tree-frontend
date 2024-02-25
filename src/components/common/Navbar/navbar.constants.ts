import { NavbarLink } from "./navbar.types";

export const NAVBAR_LINKS: NavbarLink[] = [
    {
        id: "welcome-site",
        name: "Welcome",
        link: process.env.NEXT_PUBLIC_WELCOME_SITE,
    },
    {
        id: "events-site",
        name: "Events",
        link: `${process.env.NEXT_PUBLIC_WWW_SITE}/events`,
    },
    {
        id: "members-site",
        name: "Members",
        link: process.env.NEXT_PUBLIC_MEMBERS_SITE,
    },
    {
        id: "status-site",
        name: "Status",
        link: process.env.NEXT_PUBLIC_STATUS_SITE,
    },
];

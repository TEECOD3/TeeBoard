import Chart from "@/components/custom-icons/Chart";
import Chat from "@/components/custom-icons/Chat";
import Graph from "@/components/custom-icons/Graph";
import Profile from "@/components/custom-icons/Profile";
import Settings from "@/components/custom-icons/Settings";
import Support from "@/components/custom-icons/Support";
import Tasks from "@/components/custom-icons/Tasks";
import Warn from "@/components/custom-icons/Warn";

export const Siteconfig = {
  siteName: "Gamepride",
  siteUrl: "http://localhost:3000",
  siteDescription: "Dashboard For GamePride",
  siteImage: "http://localhost:3000/images/logo.png",
  siteKeywords: "Gamepride, Frontend test, DashBoard Build",
  siteAuthor: "David Temitope",
  siteEmail: "",
  siteIcon: "/assets/svg/Logo.svg",
  siteDashboardRoutes: {
    dashboardRoutes: [
      {
        label: "Dashboard",
        path: "/",
        icon: <Graph />,
      },
      {
        label: "Overview",
        path: "/",
        icon: <Chart />,
      },
      {
        label: "chat",
        path: "/",
        icon: <Chat />,
      },
      {
        label: "Team",
        path: "/",
        icon: <Profile />,
      },

      {
        label: "Tasks",
        path: "/",
        icon: <Tasks />,
      },
      {
        label: "Reports",
        path: "/",
        icon: <Warn />,
      },
      {
        label: "setings",
        path: "/",
        icon: <Settings />,
      },
    ],
  },
};

export type Siteconfig = typeof Siteconfig;

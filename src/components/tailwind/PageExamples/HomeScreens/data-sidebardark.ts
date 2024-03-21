import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
} from "@heroicons/react/20/solid";

export type StatusType = "offline" | "online" | "error";
export type EnvType = "Preview" | "Production";

export const navigation = [
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Deployments", href: "#", icon: ServerIcon, current: true },
  { name: "Activity", href: "#", icon: SignalIcon, current: false },
  { name: "Domains", href: "#", icon: GlobeAltIcon, current: false },
  { name: "Usage", href: "#", icon: ChartBarSquareIcon, current: false },
  { name: "Settings", href: "#", icon: Cog6ToothIcon, current: false },
];
export const teams = [
  { id: 1, name: "Planetaria", href: "#", initial: "P", current: false },
  { id: 2, name: "Protocol", href: "#", initial: "P", current: false },
  { id: 3, name: "Tailwind Labs", href: "#", initial: "T", current: false },
];

export const statuses = {
  offline: "text-gray-500 bg-gray-100/10",
  online: "text-green-400 bg-green-400/10",
  error: "text-rose-400 bg-rose-400/10",
};

export const environments = {
  Preview: "text-gray-400 bg-gray-400/10 ring-gray-400/20",
  Production: "text-indigo-400 bg-indigo-400/10 ring-indigo-400/30",
};

export const deployments = [
  {
    id: 1,
    href: "#",
    projectName: "ios-app",
    teamName: "Planetaria",
    status: "offline",
    statusText: "Initiated 1m 32s ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 2,
    href: "#",
    projectName: "mobile-api",
    teamName: "Planetaria",
    status: "online",
    statusText: "Deployed 3m ago",
    description: "Deploys from GitHub",
    environment: "Production",
  },
  {
    id: 3,
    href: "#",
    projectName: "tailwindcss.com",
    teamName: "Tailwind Labs",
    status: "offline",
    statusText: "Deployed 3h ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 4,
    href: "#",
    projectName: "tailwindui.com",
    teamName: "Tailwind Labs",
    status: "online",
    statusText: "Deployed 1d ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 5,
    href: "#",
    projectName: "relay-service",
    teamName: "Protocol",
    status: "online",
    statusText: "Deployed 1d ago",
    description: "Deploys from GitHub",
    environment: "Production",
  },
  {
    id: 6,
    href: "#",
    projectName: "android-app",
    teamName: "Planetaria",
    status: "online",
    statusText: "Deployed 5d ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 7,
    href: "#",
    projectName: "api.protocol.chat",
    teamName: "Protocol",
    status: "error",
    statusText: "Deployed 5d ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
  {
    id: 8,
    href: "#",
    projectName: "planetaria.tech",
    teamName: "Planetaria",
    status: "online",
    statusText: "Deployed 6d ago",
    description: "Deploys from GitHub",
    environment: "Preview",
  },
];

export const activityItems = [
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    projectName: "ios-app",
    commit: "2d89f0c8",
    branch: "main",
    date: "1h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Lindsay Walton",
      imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    },
    projectName: "mobile-api",
    commit: "249df660",
    branch: "main",
    date: "3h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    projectName: "ios-app",
    commit: "11464223",
    branch: "main",
    date: "12h",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    projectName: "tailwindui.com",
    commit: "dad28e95",
    branch: "main",
    date: "2d",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    projectName: "relay-service",
    commit: "624bc94c",
    branch: "main",
    date: "5d",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    projectName: "api.protocol.chat",
    commit: "e111f80e",
    branch: "main",
    date: "1w",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    projectName: "api.protocol.chat",
    commit: "5e136005",
    branch: "main",
    date: "1w",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Whitney Francis",
      imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    },
    projectName: "ios-app",
    commit: "5c1fd07f",
    branch: "main",
    date: "2w",
    dateTime: "2023-01-23T11:00",
  },
];

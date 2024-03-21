import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";

export type StatusType = "Completed" | "Error";

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

export const secondaryNavigation = [
  { name: "Overview", href: "#", current: true },
  { name: "Activity", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
  { name: "Collaborators", href: "#", current: false },
  { name: "Notifications", href: "#", current: false },
];

export const stats = [
  { name: "Number of deploys", value: "405" },
  { name: "Average deploy time", value: "3.65", unit: "mins" },
  { name: "Number of servers", value: "3" },
  { name: "Success rate", value: "98.5%" },
];

export const statuses = {
  Completed: "text-green-400 bg-green-400/10",
  Error: "text-rose-400 bg-rose-400/10",
};

export const activityItems = [
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    commit: "2d89f0c8",
    branch: "main",
    status: "Completed",
    duration: "25s",
    date: "45 minutes ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Lindsay Walton",
      imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    },
    commit: "249df660",
    branch: "main",
    status: "Completed",
    duration: "1m 32s",
    date: "3 hours ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    commit: "11464223",
    branch: "main",
    status: "Error",
    duration: "1m 4s",
    date: "12 hours ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    commit: "dad28e95",
    branch: "main",
    status: "Completed",
    duration: "2m 15s",
    date: "2 days ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    commit: "624bc94c",
    branch: "main",
    status: "Completed",
    duration: "1m 12s",
    date: "5 days ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Courtney Henry",
      imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    },
    commit: "e111f80e",
    branch: "main",
    status: "Completed",
    duration: "1m 56s",
    date: "1 week ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Michael Foster",
      imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    },
    commit: "5e136005",
    branch: "main",
    status: "Completed",
    duration: "3m 45s",
    date: "1 week ago",
    dateTime: "2023-01-23T11:00",
  },
  {
    user: {
      name: "Whitney Francis",
      imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    },
    commit: "2d89f0c8",
    branch: "main",
    status: "Completed",
    duration: "37s",
    date: "2 weeks ago",
    dateTime: "2023-01-23T11:00",
  },
];

import {
  CalendarIcon,
  CodeBracketIcon,
  DocumentIcon,
  LinkIcon,
  PencilSquareIcon,
  PhotoIcon,
  TableCellsIcon,
  VideoCameraIcon,
  ViewColumnsIcon,
  Bars4Icon,
} from "@heroicons/react/24/outline";

export type PeopleType = {
  id: number;
  name: string;
  phone: string;
  email: string;
  role: string;
  imageUrl: string;
  profileUrl: string;
  url: string;
};

export const people: PeopleType[] = [
  {
    id: 1,
    name: "Leslie Alexander",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    url: "#",
    email: "lesliealexander@example.com",
    role: "Co-Founder / CEO",
    profileUrl: "https://example.com",
  },
  {
    id: 2,
    name: "Michael Foster",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    url: "#",
    email: "michaelfoster@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 3,
    name: "Dries Vincent",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    url: "#",
    email: "driesvincent@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 4,
    name: "Lindsay Walton",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    url: "#",
    email: "lindsaywalton@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 5,
    name: "Courtney Henry",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    url: "#",
    email: "courtneyhenry@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 6,
    name: "Tom Cook",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo.png",
    url: "#",
    email: "tomcook@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 7,
    name: "Whitney Francis",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    url: "#",
    email: "whitneyfrancis@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 8,
    name: "Leonard Krasner",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    url: "#",
    email: "leonardkrasner@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 9,
    name: "Floyd Miles",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-3.png",
    url: "#",
    email: "floydmiles@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 10,
    name: "Emily Selman",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    url: "#",
    email: "emilyselman@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 11,
    name: "Kristin Watson",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    url: "#",
    email: "kristinwatson@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 12,
    name: "Emma Dorsey",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    url: "#",
    email: "emmadorsey@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 13,
    name: "Alicia Bell",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    url: "#",
    email: "aliciabell@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 14,
    name: "Jenny Wilson",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    url: "#",
    email: "jennywilson@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 15,
    name: "Anna Roberts",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    url: "#",
    email: "anna roberts@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 16,
    name: "Benjamin Russel",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    url: "#",
    email: "benjaminrussel@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 17,
    name: "Jeffrey Webb",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-3.png",
    url: "#",
    email: "jeffreywebb@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 18,
    name: "Kathryn Murphy",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    url: "#",
    email: "kathrynmurphy@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 19,
    name: "Lawrence Hunter",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-5.png",
    url: "#",
    email: "lawrencehunter@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 20,
    name: "Yvette Armstrong",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-6.png",
    url: "#",
    email: "yvettearmstrong@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 21,
    name: "Angela Fisher",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-7.png",
    url: "#",
    email: "angelafisher@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 22,
    name: "Blake Reid",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-8.png",
    url: "#",
    email: "blakereid@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 23,
    name: "Hector Gibbons",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-9.png",
    url: "#",
    email: "whitneyfranhectorgibbonscis@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 24,
    name: "Fabricio Mendes",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-2.png",
    url: "#",
    email: "fabriciomendes@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 25,
    name: "Jillian Steward",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-3.png",
    url: "#",
    email: "jilliansteward@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
  {
    id: 26,
    name: "Chelsea Hagon",
    phone: "1-493-747-9031",
    imageUrl: "/src/assets/tailwind/profile-photo-4.png",
    url: "#",
    email: "chelseahagon@example.com",
    role: "Employee",
    profileUrl: "https://example.com",
  },
];

export type ItemType = {
  id: number;
  name: string;
  description: string;
  url: string;
  color: string;
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
};

export const items: ItemType[] = [
  {
    id: 1,
    name: "Text",
    description: "Add freeform text with basic formatting options.",
    url: "#",
    color: "bg-indigo-500",
    icon: PencilSquareIcon,
  },
  {
    id: 2,
    name: "Video",
    description: "Add a video from YouTube, Vimeo or other services.",
    url: "#",
    color: "bg-blue-500",
    icon: VideoCameraIcon,
  },
  {
    id: 3,
    name: "Page",
    description: "Add a new blank page to your project.",
    url: "#",
    color: "bg-violet-500",
    icon: DocumentIcon,
  },
  {
    id: 4,
    name: "Calendar",
    description: "Add a full month calendar or a week view calendar.",
    url: "#",
    color: "bg-teal-500",
    icon: CalendarIcon,
  },
  {
    id: 5,
    name: "Table",
    description: "Add a table for displaying larger sets of data.",
    url: "#",
    color: "bg-cyan-500",
    icon: TableCellsIcon,
  },
  {
    id: 6,
    name: "Code",
    description: "Add raw HTML, JavaScript or CSS code.",
    url: "#",
    color: "bg-purple-500",
    icon: CodeBracketIcon,
  },
  {
    id: 7,
    name: "Image",
    description: "Add a simple image or a photo gallery.",
    url: "#",
    color: "bg-rose-500",
    icon: PhotoIcon,
  },
  {
    id: 8,
    name: "Link",
    description: "Add a link to another page, website, or email address.",
    url: "#",
    color: "bg-fuchsia-500",
    icon: LinkIcon,
  },
  {
    id: 9,
    name: "Board",
    description: "Add a kanbar style board with cards and columns.",
    url: "#",
    color: "bg-pink-500",
    icon: ViewColumnsIcon,
  },
  {
    id: 10,
    name: "List",
    description: "Add an ordered or unordered list.",
    url: "#",
    color: "bg-sky-500",
    icon: Bars4Icon,
  },
];

export type ProjectType = {
  id: number;
  name: string;
  category: string;
  url: string;
};

export const projects: ProjectType[] = [
  { id: 1, name: "Workflow Inc.", category: "Clients", url: "#" },
  {
    id: 2,
    name: "Workflow Inc. / Website Redesign",
    category: "Projects",
    url: "#",
  },
  {
    id: 3,
    name: "Workflow Inc. / Open Graph Image",
    category: "Projects",
    url: "#",
  },
  {
    id: 4,
    name: "Workflow Inc. / Logo Design",
    category: "Projects",
    url: "#",
  },
  {
    id: 5,
    name: "Workflow Inc. / Advertising Campaign",
    category: "Projects",
    url: "#",
  },
  // More items...
];

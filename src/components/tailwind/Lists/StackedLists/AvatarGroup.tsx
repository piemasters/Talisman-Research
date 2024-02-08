import {
  ChatBubbleLeftIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const discussions = [
  {
    id: 1,
    title: "Atque perspiciatis et et aut ut porro voluptatem blanditiis?",
    href: "#",
    author: { name: "Leslie Alexander", href: "#" },
    date: "2d ago",
    dateTime: "2023-01-23T22:34Z",
    status: "active",
    totalComments: 24,
    commenters: [
      {
        id: 12,
        name: "Emma Dorsey",
        imageUrl: "/src/assets/tailwind/profile-photo.png",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl: "/src/assets/tailwind/profile-photo-2.png",
      },
      {
        id: 4,
        name: "Lindsay Walton",
        imageUrl: "/src/assets/tailwind/profile-photo-3.png",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl: "/src/assets/tailwind/profile-photo-4.png",
      },
      {
        id: 23,
        name: "Hector Gibbons",
        imageUrl: "/src/assets/tailwind/profile-photo-5.png",
      },
    ],
  },
  {
    id: 2,
    title: "Et ratione distinctio nesciunt recusandae vel ab?",
    href: "#",
    author: { name: "Michael Foster", href: "#" },
    date: "2d ago",
    dateTime: "2023-01-23T19:20Z",
    status: "active",
    totalComments: 6,
    commenters: [
      {
        id: 13,
        name: "Alicia Bell",
        imageUrl: "/src/assets/tailwind/profile-photo-2.png",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl: "/src/assets/tailwind/profile-photo-6.png",
      },
      {
        id: 3,
        name: "Dries Vincent",
        imageUrl: "/src/assets/tailwind/profile-photo-8.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blanditiis perferendis fugiat optio dolor minus ut?",
    href: "#",
    author: { name: "Dries Vincent", href: "#" },
    date: "3d ago",
    dateTime: "2023-01-22T12:59Z",
    status: "resolved",
    totalComments: 22,
    commenters: [
      {
        id: 19,
        name: "Lawrence Hunter",
        imageUrl: "/src/assets/tailwind/profile-photo-3.png",
      },
      {
        id: 21,
        name: "Angela Fisher",
        imageUrl: "/src/assets/tailwind/profile-photo-7.png",
      },
      {
        id: 14,
        name: "Jenny Wilson",
        imageUrl: "/src/assets/tailwind/profile-photo-2.png",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl: "/src/assets/tailwind/profile-photo-6.png",
      },
    ],
  },
  {
    id: 4,
    title: "Voluptatum ducimus voluptatem qui in eum quasi consequatur vel?",
    href: "#",
    author: { name: "Lindsay Walton", href: "#" },
    date: "5d ago",
    dateTime: "2023-01-20T10:04Z",
    status: "resolved",
    totalComments: 8,
    commenters: [
      {
        id: 10,
        name: "Emily Selman",
        imageUrl: "/src/assets/tailwind/profile-photo-8.png",
      },
      {
        id: 11,
        name: "Kristin Watson",
        imageUrl: "/src/assets/tailwind/profile-photo-9.png",
      },
    ],
  },
  {
    id: 5,
    title: "Perferendis cum qui inventore ut excepturi nostrum occaecati?",
    href: "#",
    author: { name: "Courtney Henry", href: "#" },
    date: "5d ago",
    dateTime: "2023-01-20T20:12Z",
    status: "active",
    totalComments: 15,
    commenters: [
      {
        id: 11,
        name: "Kristin Watson",
        imageUrl: "/src/assets/tailwind/profile-photo-9.png",
      },
      {
        id: 6,
        name: "Tom Cook",
        imageUrl: "/src/assets/tailwind/profile-photo-7.png",
      },
      {
        id: 10,
        name: "Emily Selman",
        imageUrl: "/src/assets/tailwind/profile-photo-4.png",
      },
      {
        id: 16,
        name: "Benjamin Russel",
        imageUrl: "/src/assets/tailwind/profile-photo-2.png",
      },
    ],
  },
];

export default function Example() {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {discussions.map((discussion) => (
        <li
          key={discussion.id}
          className="flex flex-wrap items-center justify-between py-5 gap-x-6 gap-y-4 sm:flex-nowrap"
        >
          <div>
            <p className="text-sm font-semibold leading-6 text-gray-900">
              <a href={discussion.href} className="hover:underline">
                {discussion.title}
              </a>
            </p>
            <div className="flex items-center mt-1 text-xs leading-5 text-gray-500 gap-x-2">
              <p>
                <a href={discussion.author.href} className="hover:underline">
                  {discussion.author.name}
                </a>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p>
                <time dateTime={discussion.dateTime}>{discussion.date}</time>
              </p>
            </div>
          </div>
          <dl className="flex justify-between flex-none w-full gap-x-8 sm:w-auto">
            <div className="flex -space-x-0.5">
              <dt className="sr-only">Commenters</dt>
              {discussion.commenters.map((commenter) => (
                <dd key={commenter.id}>
                  <img
                    className="w-6 h-6 rounded-full bg-gray-50 ring-2 ring-white"
                    src={commenter.imageUrl}
                    alt={commenter.name}
                  />
                </dd>
              ))}
            </div>
            <div className="flex w-16 gap-x-2.5">
              <dt>
                <span className="sr-only">Total comments</span>
                {discussion.status === "resolved" ? (
                  <CheckCircleIcon
                    className="w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                ) : (
                  <ChatBubbleLeftIcon
                    className="w-6 h-6 text-gray-400"
                    aria-hidden="true"
                  />
                )}
              </dt>
              <dd className="text-sm leading-6 text-gray-900">
                {discussion.totalComments}
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}

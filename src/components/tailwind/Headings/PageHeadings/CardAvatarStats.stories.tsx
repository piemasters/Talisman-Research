import type { Meta, StoryObj } from "@storybook/react";

import { CardAvatarStats } from "./CardAvatarStats";

const meta = {
  title: "Headings/Page Headings",
  component: CardAvatarStats,
  decorators: [
    (Story) => (
      <div className="bg-gray-200 py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof CardAvatarStats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardWithAvatarAndStats: Story = {};

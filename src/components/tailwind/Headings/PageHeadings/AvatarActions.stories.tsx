import type { Meta, StoryObj } from "@storybook/react";

import { AvatarActions } from "./AvatarActions";

const meta = {
  title: "Headings/Page Headings",
  component: AvatarActions,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof AvatarActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatarAndActions: Story = {};

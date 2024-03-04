import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Badges";

const meta = {
  title: "Navigation/Vertical Navigation",
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-8 bg-white">
        <div className="w-64 mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBadges: Story = {};

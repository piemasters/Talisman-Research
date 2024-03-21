import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SidebarDark";

const meta = {
  title: "Page Examples/Home Screens",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-full overflow-y-auto bg-gray-900">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SidebarOnDark: Story = {};

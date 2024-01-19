import type { Meta, StoryObj } from "@storybook/react";

import { LightSidebarGray } from "./LightSidebarGray";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: LightSidebarGray,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-full bg-gray-50">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LightSidebarGray>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightGray: Story = {};

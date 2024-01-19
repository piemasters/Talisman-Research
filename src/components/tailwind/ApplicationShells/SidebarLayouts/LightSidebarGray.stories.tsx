import type { Meta, StoryObj } from "@storybook/react";

import Component from "./LightSidebarGray";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: Component,
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
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebarWithGrayBackground: Story = {};

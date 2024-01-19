import type { Meta, StoryObj } from "@storybook/react";

import Component from "./DarkSidebarHeader";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSidebarWithHeader: Story = {};

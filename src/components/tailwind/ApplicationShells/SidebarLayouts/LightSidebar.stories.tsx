import type { Meta, StoryObj } from "@storybook/react";

import { LightSidebar } from "./LightSidebar";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: LightSidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LightSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

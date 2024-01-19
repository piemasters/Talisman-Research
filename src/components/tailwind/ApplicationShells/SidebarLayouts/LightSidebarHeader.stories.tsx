import type { Meta, StoryObj } from "@storybook/react";

import { LightSidebarHeader } from "./LightSidebarHeader";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: LightSidebarHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LightSidebarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebarWithHeader: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { DarkSidebarHeader } from "./DarkSidebarHeader";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: DarkSidebarHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DarkSidebarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSidebarWithHeader: Story = {};

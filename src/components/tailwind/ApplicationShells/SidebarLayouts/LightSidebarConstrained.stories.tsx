import type { Meta, StoryObj } from "@storybook/react";

import { LightSidebarConstrained } from "./LightSidebarConstrained";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: LightSidebarConstrained,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LightSidebarConstrained>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebarWithConstrainedContentArea: Story = {};

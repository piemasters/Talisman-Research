import type { Meta, StoryObj } from "@storybook/react";

import { LightSidebar as LightSidebarComponent } from "./LightSidebar";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: LightSidebarComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LightSidebarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSidebar: Story = {};

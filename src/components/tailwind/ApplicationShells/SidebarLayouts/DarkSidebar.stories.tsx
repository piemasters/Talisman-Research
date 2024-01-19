import type { Meta, StoryObj } from "@storybook/react";

import { DarkSidebar as DarkSidebarComponent } from "./DarkSidebar";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: DarkSidebarComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DarkSidebarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkSidebar: Story = {};

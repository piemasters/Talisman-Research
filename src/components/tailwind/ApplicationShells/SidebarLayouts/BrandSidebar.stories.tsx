import type { Meta, StoryObj } from "@storybook/react";

import { BrandSidebar as BrandSidebarComponent } from "./BrandSidebar";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: BrandSidebarComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrandSidebarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandSidebar: Story = {};

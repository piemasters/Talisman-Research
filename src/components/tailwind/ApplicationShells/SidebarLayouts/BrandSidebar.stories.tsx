import type { Meta, StoryObj } from "@storybook/react";

import { BrandSidebar } from "./BrandSidebar";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: BrandSidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrandSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Branded: Story = {};

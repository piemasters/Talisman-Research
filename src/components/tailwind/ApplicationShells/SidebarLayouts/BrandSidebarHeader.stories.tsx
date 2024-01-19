import type { Meta, StoryObj } from "@storybook/react";

import { BrandSidebarHeader } from "./BrandSidebarHeader";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: BrandSidebarHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrandSidebarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandedHeader: Story = {};

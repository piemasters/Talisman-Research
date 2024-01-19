import type { Meta, StoryObj } from "@storybook/react";

import { DarkSidebar } from "./DarkSidebar";

const meta = {
  title: "Application Shells/Sidebar Layouts",
  component: DarkSidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DarkSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {};

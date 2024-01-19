import type { Meta, StoryObj } from "@storybook/react";

import { FullNarrowSidebar } from "./FullNarrowSidebar";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: FullNarrowSidebar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FullNarrowSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullNarrow: Story = {};

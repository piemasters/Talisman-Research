import type { Meta, StoryObj } from "@storybook/react";

import { FullNarrowSidebarHeader } from "./FullNarrowSidebarHeader";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: FullNarrowSidebarHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FullNarrowSidebarHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthWithNarrowSidebarAndHeader: Story = {};

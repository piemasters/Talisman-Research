import type { Meta, StoryObj } from "@storybook/react";

import { FullThreeColumn } from "./FullThreeColumn";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: FullThreeColumn,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FullThreeColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthThreeColumn: Story = {};

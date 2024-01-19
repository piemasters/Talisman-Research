import type { Meta, StoryObj } from "@storybook/react";

import { ConstrainedThreeColumn } from "./ConstrainedThreeColumn";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: ConstrainedThreeColumn,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ConstrainedThreeColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConstrainedThree: Story = {};

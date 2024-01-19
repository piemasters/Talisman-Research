import type { Meta, StoryObj } from "@storybook/react";

import { DoubleRowNavOverlap } from "./DoubleRowNavOverlap";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: DoubleRowNavOverlap,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DoubleRowNavOverlap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoRowNavigationWithOverlap: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { DarkNavOverlap } from "./DarkNavOverlap";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: DarkNavOverlap,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DarkNavOverlap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkOverlap: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { BrandedNavOverlap } from "./BrandedNavOverlap";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: BrandedNavOverlap,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrandedNavOverlap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandedOverlap: Story = {};

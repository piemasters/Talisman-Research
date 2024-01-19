import type { Meta, StoryObj } from "@storybook/react";

import { BrandedNavCompactHeader } from "./BrandedNavCompactHeader";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: BrandedNavCompactHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrandedNavCompactHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandedCompact: Story = {};

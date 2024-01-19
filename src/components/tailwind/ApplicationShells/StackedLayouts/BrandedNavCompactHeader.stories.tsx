import type { Meta, StoryObj } from "@storybook/react";

import Component from "./BrandedNavCompactHeader";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandedNavWithCompactWhitePageHeader: Story = {};

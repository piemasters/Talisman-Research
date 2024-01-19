import type { Meta, StoryObj } from "@storybook/react";

import { FullSecondaryRight } from "./FullSecondaryRight";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: FullSecondaryRight,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof FullSecondaryRight>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthSecondaryColumnOnRight: Story = {};

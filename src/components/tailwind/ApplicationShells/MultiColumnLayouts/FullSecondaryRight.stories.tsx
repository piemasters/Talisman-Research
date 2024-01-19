import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FullSecondaryRight";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthSecondaryColumnOnRight: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { LightNavBottomBorder } from "./LightNavBottomBorder";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: LightNavBottomBorder,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof LightNavBottomBorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNavWithBottomBorder: Story = {};

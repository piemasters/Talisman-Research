import type { Meta, StoryObj } from "@storybook/react";

import Component from "./LightNavGrayBackground";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-full bg-gray-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightNavOnGrayBackground: Story = {};

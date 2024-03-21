import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Stacked";

const meta = {
  title: "Page Examples/Home Screens",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Stacked: Story = {};

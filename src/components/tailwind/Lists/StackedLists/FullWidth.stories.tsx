import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FullWidth";

const meta = {
  title: "Lists/Stacked Lists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-12 bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthWithLinks: Story = {};

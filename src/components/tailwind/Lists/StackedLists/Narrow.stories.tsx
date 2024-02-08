import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Narrow";

const meta = {
  title: "Lists/Stacked Lists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="max-w-lg px-4 py-12 mx-auto sm:px-6 md:py-16">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Narrow: Story = {};

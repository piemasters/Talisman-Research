import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Columns";

const meta = {
  title: "Lists/Stacked Lists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="px-4 py-12 bg-white sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumnsWithLinks: Story = {};

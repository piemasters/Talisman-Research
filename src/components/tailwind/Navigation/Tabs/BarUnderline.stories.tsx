import type { Meta, StoryObj } from "@storybook/react";

import Component from "./BarUnderline";

const meta = {
  title: "Navigation/Tabs",
  component: Component,
  decorators: [
    (Story) => (
      <div className="px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BarWithUnderline: Story = {};

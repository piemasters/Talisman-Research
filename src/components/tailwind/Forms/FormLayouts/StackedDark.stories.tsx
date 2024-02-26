import type { Meta, StoryObj } from "@storybook/react";

import Component from "./StackedDark";

const meta = {
  title: "Forms/Form Layouts",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-900">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StackedOnDark: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SimpleWell";

const meta = {
  title: "Forms/Action Panels",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleWell: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./LeftCard";

const meta = {
  title: "Data Display/Description Lists",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftAlignedInCard: Story = {};

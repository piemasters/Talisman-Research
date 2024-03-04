import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CirclesText";

const meta = {
  title: "Navigation/Steps",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="flex justify-center px-4 py-12 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CirclesWithText: Story = {};

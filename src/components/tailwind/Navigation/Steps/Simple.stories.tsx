import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Simple";

const meta = {
  title: "Navigation/Steps",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="p-6 mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};

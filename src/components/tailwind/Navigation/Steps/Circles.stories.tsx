import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Circles";

const meta = {
  title: "Navigation/Steps",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="flex justify-center py-12 mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Circles: Story = {};

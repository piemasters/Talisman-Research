import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Simple";

const meta = {
  title: "Feedback/Empty States",
  component: Component,
  decorators: [
    (Story) => (
      <div className="px-4 py-12 bg-white">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ListInlineDescription";

const meta = {
  title: "Forms/Checkboxes",
  component: Component,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center px-4 py-12 bg-white">
        <div className="w-full max-w-lg mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListWithInlineDescription: Story = {};

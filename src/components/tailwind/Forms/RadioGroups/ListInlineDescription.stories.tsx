import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ListInlineDescription";

const meta = {
  title: "Forms/Radio Groups",
  component: Component,
  decorators: [
    (Story) => (
      <div className="flex justify-center px-8 py-12 bg-white">
        <div>
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListWithInlineDescription: Story = {};

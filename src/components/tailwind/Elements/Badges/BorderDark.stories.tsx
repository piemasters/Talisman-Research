import type { Meta, StoryObj } from "@storybook/react";

import Component from "./BorderDark";

const meta = {
  title: "Elements/Badges",
  component: Component,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-gray-900">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBorderOnDark: Story = {};

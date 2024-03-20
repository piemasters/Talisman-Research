import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SecondaryDark";

const meta = {
  title: "Elements/Buttons",
  component: Component,
  decorators: [
    (Story) => (
      <div className="px-4 py-8 bg-gray-900">
        <div className="flex flex-col items-center justify-start max-w-3xl mx-auto space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondaryButtonsOnDark: Story = {};

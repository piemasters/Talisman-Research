import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ActionsSharedBorders";

const meta = {
  title: "Lists/Grid Lists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-8 bg-gray-200">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ActionsWithSharedBorders: Story = {};

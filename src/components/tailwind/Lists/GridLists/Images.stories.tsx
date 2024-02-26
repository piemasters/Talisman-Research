import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Images";

const meta = {
  title: "Lists/GridLists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100 ">
        <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImagesWithDetails: Story = {};

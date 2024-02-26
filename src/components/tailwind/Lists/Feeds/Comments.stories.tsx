import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Comments";

const meta = {
  title: "Lists/Feeds",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-12 bg-white">
        <div className="max-w-lg px-6 mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithComments: Story = {};

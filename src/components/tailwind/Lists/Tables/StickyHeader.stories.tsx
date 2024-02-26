import type { Meta, StoryObj } from "@storybook/react";

import Component from "./StickyHeader";

const meta = {
  title: "Lists/Tables",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="max-h-[600px] overflow-y-auto bg-white">
        <div className="py-10">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithStickyHeader: Story = {};

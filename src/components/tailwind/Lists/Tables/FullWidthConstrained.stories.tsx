import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FullWidthConstrained";

const meta = {
  title: "Lists/Tables",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-10 bg-white">
        <div className="">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthWithConstrainedContent: Story = {};

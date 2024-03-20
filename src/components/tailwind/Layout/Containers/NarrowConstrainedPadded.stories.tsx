import type { Meta, StoryObj } from "@storybook/react";

import Component from "./NarrowConstrainedPadded";
import { DemoContents } from "./DemoContents";

const meta = {
  title: "Layout/Containers",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div>
        <div className="bg-gray-100">
          <Story />
        </div>
      </div>
    ),
  ],
  render: ({ ...args }) => (
    <Component {...args}>
      <DemoContents />
    </Component>
  ),
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NarrowConstrainedWithPaddedContent: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CardDividers";
import { DemoContents } from "./DemoContents";

const meta = {
  title: "Layout/List Containers",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div>
        <div className="p-8 bg-gray-100">
          <div className="max-w-md mx-auto">
            <Story />
          </div>
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

export const CardWithDividers: Story = {};

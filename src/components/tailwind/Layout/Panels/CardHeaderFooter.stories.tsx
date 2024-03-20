import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CardHeaderFooter";
import { DemoContents } from "./DemoContents";

const meta = {
  title: "Layout/Panels",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div>
        <div className="bg-gray-100">
          <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Story />
            </div>
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

export const CardWithHeaderAndFooter: Story = {};

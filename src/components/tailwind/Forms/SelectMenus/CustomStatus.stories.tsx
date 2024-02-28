import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CustomStatus";

const meta = {
  title: "Forms/Select Menus",
  component: Component,
  decorators: [
    (Story) => (
      <div
        className="flex justify-center p-8 bg-gray-100"
        style={{ minHeight: "600px" }}
      >
        <div className="w-full max-w-xs mx-auto">
          <div>
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomWithStatusIndicator: Story = {};

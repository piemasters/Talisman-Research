import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Dropdown";

const meta = {
  title: "Elements/Button Groups",
  component: Component,
  decorators: [
    (Story) => (
      <div>
        <div
          className="flex items-start justify-center p-8 bg-white"
          style={{ minHeight: "256px" }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDropdown: Story = {};

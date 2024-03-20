import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CheckboxDropdown";

const meta = {
  title: "Elements/Button Groups",
  component: Component,
  decorators: [
    (Story) => (
      <div>
        <div className="flex items-center justify-center p-8 bg-white">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCheckboxAndDropdown: Story = {};

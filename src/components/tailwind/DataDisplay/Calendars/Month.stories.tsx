import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Month";

const meta = {
  title: "Data Display/Calendars",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-50 lg:h-0 lg:min-h-[768px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MonthView: Story = {};

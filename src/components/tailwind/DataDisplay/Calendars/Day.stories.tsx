import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Day";

const meta = {
  title: "Data Display/Calendars",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="h-0 min-h-[768px] bg-gray-50">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DayView: Story = {};

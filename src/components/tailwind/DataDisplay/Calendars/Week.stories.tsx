import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Week";

const meta = {
  title: "Data Display/Calendars",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="mx-auto max-w-lg px-6 py-8 lg:max-w-4xl xl:max-w-6xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WeekView: Story = {};

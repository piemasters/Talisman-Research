import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Double";

const meta = {
  title: "Data Display/Calendars",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-lg md:max-w-3xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Double: Story = {};

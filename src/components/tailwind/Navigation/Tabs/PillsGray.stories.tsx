import type { Meta, StoryObj } from "@storybook/react";

import Component from "./PillsGray";

const meta = {
  title: "Navigation/Tabs",
  component: Component,
  decorators: [
    (Story) => (
      <div className="px-4 py-6 bg-gray-100 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsInPillsOnGray: Story = {};

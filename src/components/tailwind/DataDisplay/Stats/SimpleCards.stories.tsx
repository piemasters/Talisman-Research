import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SimpleCards";

const meta = {
  title: "Data Display/Stats",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleInCards: Story = {};

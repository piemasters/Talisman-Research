import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SimpleCardFooter";

const meta = {
  title: "Navigation/Pagination",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleCardFooter: Story = {};

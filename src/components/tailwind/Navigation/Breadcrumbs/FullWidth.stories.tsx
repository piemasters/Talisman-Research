import type { Meta, StoryObj } from "@storybook/react";

import Component from "./FullWidth";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="py-12 lg:py-24">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthBar: Story = {};

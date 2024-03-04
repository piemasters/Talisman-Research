import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Contained";

const meta = {
  title: "Navigation/Breadcrumbs",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="max-w-2xl px-4 py-12 mx-auto sm:px-8 lg:py-24">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {};

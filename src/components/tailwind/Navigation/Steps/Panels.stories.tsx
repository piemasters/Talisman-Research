import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Panels";

const meta = {
  title: "Navigation/Steps",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Panels: Story = {};

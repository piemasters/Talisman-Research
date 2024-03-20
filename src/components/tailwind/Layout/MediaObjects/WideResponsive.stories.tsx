import type { Meta, StoryObj } from "@storybook/react";

import Component from "./WideResponsive";

const meta = {
  title: "Layout/Media Objects",
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-8 bg-white">
        <div className="max-w-md mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WideResponsive: Story = {};

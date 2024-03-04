import type { Meta, StoryObj } from "@storybook/react";

import Component from "./PanelsBorder";

const meta = {
  title: "Navigation/Steps",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="py-4 lg:py-12">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PanelsWithBorder: Story = {};

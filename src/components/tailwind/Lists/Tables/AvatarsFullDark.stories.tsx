import type { Meta, StoryObj } from "@storybook/react";
import Component from "./AvatarsFullDark";

const meta = {
  title: "Lists/Tables",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-10 bg-gray-900">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidthWithAvatarsOnDark: Story = {};

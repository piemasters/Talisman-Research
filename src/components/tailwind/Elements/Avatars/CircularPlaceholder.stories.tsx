import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CircularPlaceholder";

const meta = {
  title: "Elements/Avatars",
  component: Component,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="flex items-end justify-around w-full max-w-lg mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CircularAvatarsWithPlaceholderIcon: Story = {};

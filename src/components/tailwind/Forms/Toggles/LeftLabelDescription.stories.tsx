import type { Meta, StoryObj } from "@storybook/react";

import Component from "./LeftLabelDescription";

const meta = {
  title: "Forms/Toggles",
  component: Component,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLeftLabelAndDescription: Story = {};

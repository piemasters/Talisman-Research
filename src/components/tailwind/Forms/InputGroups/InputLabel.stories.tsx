import type { Meta, StoryObj } from "@storybook/react";

import Component from "./InputLabel";

const meta = {
  title: "Forms/Input Groups",
  component: Component,
  decorators: [
    (Story) => (
      <div className="flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-xs mx-auto">
          <div>
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithLabel: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./TitleButton";

const meta = {
  title: "Layout/Dividers",
  component: Component,
  decorators: [
    (Story) => (
      <div className="py-8 bg-white">
        <div className="max-w-2xl px-4 mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitleAndButton: Story = {};

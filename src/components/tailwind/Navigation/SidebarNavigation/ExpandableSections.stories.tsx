import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ExpandableSections";

const meta = {
  title: "Navigation/Side Navigation",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="flex min-h-[720px] bg-white">
        <div className="flex flex-col w-72">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithExpandableSections: Story = {};

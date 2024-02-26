import type { Meta, StoryObj } from "@storybook/react";

import Component from "./TwoColumn";

const meta = {
  title: "Forms/Form Layouts",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TwoColumn: Story = {};

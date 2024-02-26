import type { Meta, StoryObj } from "@storybook/react";

import Component from "./ContactCardsSmall";

const meta = {
  title: "Lists/GridLists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="py-10 bg-gray-100">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContactCardsWithSmallPortraits: Story = {};

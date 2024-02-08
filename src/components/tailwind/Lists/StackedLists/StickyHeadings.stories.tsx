import type { Meta, StoryObj } from "@storybook/react";

import Component from "./StickyHeadings";

const meta = {
  title: "Lists/Stacked Lists",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div
          className="mx-auto sm:max-w-lg sm:px-6"
          style={{ height: "39rem" }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NarrowWithStickyHeadings: Story = {};

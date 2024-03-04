import type { Meta, StoryObj } from "@storybook/react";

import Component from "./CloseOutside";

const meta = {
  title: "Overlays/Slide Overs",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-100" style={{ minHeight: "90vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithCloseButtonOnOutside: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./SimpleButtonsLeft";

const meta = {
  title: "Overlays/Dialogs",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="bg-gray-300" style={{ minHeight: "90vh" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleAlertWithLeftAlignedButtons: Story = {};

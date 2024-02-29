import type { Meta, StoryObj } from "@storybook/react";

import Component from "./DismissButton";

const meta = {
  title: "Feedback/Alerts",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDismissButton: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Recommendations";

const meta = {
  title: "Feedback/Empty States",
  component: Component,
  decorators: [
    (Story) => (
      <div className="px-4 py-12 bg-white">
        <div className="max-w-2xl px-4 mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithRecommendations: Story = {};

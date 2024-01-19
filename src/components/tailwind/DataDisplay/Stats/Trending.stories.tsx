import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Trending";

const meta = {
  title: "Data Display/Stats",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTrending: Story = {};

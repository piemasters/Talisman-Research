import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Search";

const meta = {
  title: "Navigation/Navbars",
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

export const WithSearch: Story = {};

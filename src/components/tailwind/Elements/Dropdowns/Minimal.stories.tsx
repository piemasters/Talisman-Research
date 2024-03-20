import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Minimal";

const meta = {
  title: "Elements/Dropdowns",
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-100" style={{ minHeight: "360px" }}>
        <div className="w-64 mx-auto text-right">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMinimalMenuIcon: Story = {};

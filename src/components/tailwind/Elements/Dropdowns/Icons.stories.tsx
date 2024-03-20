import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Icons";

const meta = {
  title: "Elements/Dropdowns",
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-8 bg-gray-100" style={{ minHeight: "460px" }}>
        <div className="w-64 mx-auto text-right">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithIcons: Story = {};

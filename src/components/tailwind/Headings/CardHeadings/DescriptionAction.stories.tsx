import type { Meta, StoryObj } from "@storybook/react";

import Component from "./DescriptionAction";
import { CardDemo } from "./CardDemo";

const meta = {
  title: "Headings/Card Headings",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-none">
            <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
              <Story />
              <CardDemo />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDescriptionAndAction: Story = {};

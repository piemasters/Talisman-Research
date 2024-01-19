import type { Meta, StoryObj } from "@storybook/react";

import { ActionsDark } from "./ActionsDark";

const meta = {
  title: "Headings/Page Headings",
  component: ActionsDark,
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ActionsDark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActionsOnDark: Story = {};

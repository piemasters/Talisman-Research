import type { Meta, StoryObj } from "@storybook/react";

import { MetaDark } from "./MetaDark";

const meta = {
  title: "Headings/Page Headings",
  component: MetaDark,
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MetaDark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMetaAndActionsOnDark: Story = {};

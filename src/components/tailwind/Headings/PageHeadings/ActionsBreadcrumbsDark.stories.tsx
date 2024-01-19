import type { Meta, StoryObj } from "@storybook/react";

import { ActionsBreadcrumbsDark } from "./ActionsBreadcrumbsDark";

const meta = {
  title: "Headings/Page Headings",
  component: ActionsBreadcrumbsDark,
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ActionsBreadcrumbsDark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActionsAndBreadcrumbsOnDark: Story = {};

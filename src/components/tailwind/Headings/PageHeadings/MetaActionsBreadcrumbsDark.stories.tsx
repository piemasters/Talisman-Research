import type { Meta, StoryObj } from "@storybook/react";

import { MetaActionsBreadcrumbsDark } from "./MetaActionsBreadcrumbsDark";

const meta = {
  title: "Headings/Page Headings",
  component: MetaActionsBreadcrumbsDark,
  decorators: [
    (Story) => (
      <div className="bg-gray-800 p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MetaActionsBreadcrumbsDark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMetaAndActionsAndBreadcrumbsOnDark: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { MetaActionsBreadcrumbs } from "./MetaActionsBreadcrumbs";

const meta = {
  title: "Headings/Page Headings",
  component: MetaActionsBreadcrumbs,
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MetaActionsBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMetaAndActionsAndBreadcrumbs: Story = {};

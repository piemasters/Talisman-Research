import type { Meta, StoryObj } from "@storybook/react";

import { ActionsBreadcrumbs } from "./ActionsBreadcrumbs";

const meta = {
  title: "Headings/Page Headings",
  component: ActionsBreadcrumbs,
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof ActionsBreadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActionsAndBreadcrumbs: Story = {};

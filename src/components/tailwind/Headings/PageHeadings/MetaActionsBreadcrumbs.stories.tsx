import type { Meta, StoryObj } from "@storybook/react";

import Component from "./MetaActionsBreadcrumbs";

const meta = {
  title: "Headings/Page Headings",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMetaAndActionsAndBreadcrumbs: Story = {};

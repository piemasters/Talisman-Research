import type { Meta, StoryObj } from "@storybook/react";

import { FiltersAction } from "./FiltersAction";

const meta = {
  title: "Headings/Page Headings",
  component: FiltersAction,
  decorators: [
    (Story) => (
      <div className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof FiltersAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithFiltersAndAction: Story = {};

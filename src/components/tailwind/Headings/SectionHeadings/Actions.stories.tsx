import type { Meta, StoryObj } from "@storybook/react";

import { Actions } from "./Actions";

const meta = {
  title: "Headings/Section Headings",
  component: Actions,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Actions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActions: Story = {};

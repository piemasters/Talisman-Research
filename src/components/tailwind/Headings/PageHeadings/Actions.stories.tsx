import type { Meta, StoryObj } from "@storybook/react";

import { Actions } from "./Actions";

const meta = {
  title: "Headings/Page Headings",
  component: Actions,
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Actions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithActions: Story = {};

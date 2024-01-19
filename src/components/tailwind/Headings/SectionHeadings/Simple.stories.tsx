import type { Meta, StoryObj } from "@storybook/react";

import { Simple as SimpleComponent } from "./Simple";

const meta = {
  title: "Headings/Section Headings",
  component: SimpleComponent,
  decorators: [
    (Story) => (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof SimpleComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {};

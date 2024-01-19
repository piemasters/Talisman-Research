import type { Meta, StoryObj } from "@storybook/react";

import Component from "./BorderlessStacked";

const meta = {
  title: "Data Display/Calendars",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white py-16">
        <div className="mx-auto max-w-md px-4 sm:px-7">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BorderlessStacked: Story = {};

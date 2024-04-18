import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Catalyst/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div className="h-full bg-white dark:bg-gray-900">
        <div className="px-4 py-8">
          <div className="flex flex-col items-center justify-start max-w-3xl mx-auto space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Core: Story = {
  args: {
    children: "Button Text",
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args}>{children}</Button>
    </>
  ),
};

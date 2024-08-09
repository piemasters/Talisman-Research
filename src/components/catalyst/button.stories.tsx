import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Catalyst/Button",
  component: Button,
  argTypes: {
    color: {
      options: [
        "dark/zinc",
        "light",
        "dark/white",
        "dark",
        "white",
        "zinc",
        "indigo",
        "cyan",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "sky",
        "blue",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
      control: "select",
    },
    children: {
      control: "text",
    },
    outline: {
      control: "boolean",
    },
    plain: {
      control: "boolean",
    },
  },
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
    color: "dark",
    children: "Button Text",
    outline: false,
    plain: false,
  },
  render: ({ children, ...args }) => (
    <>
      <Button {...args}>{children}</Button>
    </>
  ),
};

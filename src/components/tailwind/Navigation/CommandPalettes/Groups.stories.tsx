import type { Meta, StoryObj } from "@storybook/react";

import Component from "./Groups";

const meta = {
  title: "Navigation/Command Palettes",
  component: Component,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="">
        <div
          className="min-h-[600px] bg-gray-300 bg-cover bg-center"
          style={{
            backgroundImage: "url(/src/assets/tailwind/background-8.png)",
          }}
        />
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithGroups: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import Component from "./AvatarActions";

const meta = {
  title: "Forms/Textareas",
  component: Component,
  decorators: [
    (Story) => (
      <div className="p-8 bg-white">
        <div className="w-full max-w-md mx-auto">
          <div>
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatarAndActions: Story = {};

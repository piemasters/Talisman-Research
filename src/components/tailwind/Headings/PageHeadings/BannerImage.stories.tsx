import type { Meta, StoryObj } from "@storybook/react";

import Component from "./BannerImage";

const meta = {
  title: "Headings/Page Headings",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-white p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBannerImage: Story = {};

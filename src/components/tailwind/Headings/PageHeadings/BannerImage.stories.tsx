import type { Meta, StoryObj } from "@storybook/react";

import { BannerImage } from "./BannerImage";

const meta = {
  title: "Headings/Page Headings",
  component: BannerImage,
  decorators: [
    (Story) => (
      <div className="bg-white p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof BannerImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithBannerImage: Story = {};

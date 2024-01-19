import type { Meta, StoryObj } from "@storybook/react";

import { BrandedNavWhiteHeader } from "./BrandedNavWhiteHeader";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: BrandedNavWhiteHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof BrandedNavWhiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BrandedNabWithWhitePageHeader: Story = {};

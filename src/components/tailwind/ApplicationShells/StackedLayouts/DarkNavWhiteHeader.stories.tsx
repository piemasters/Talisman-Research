import type { Meta, StoryObj } from "@storybook/react";

import { DarkNavWhiteHeader } from "./DarkNavWhiteHeader";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: DarkNavWhiteHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DarkNavWhiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkNavWithWhitePageHeader: Story = {};

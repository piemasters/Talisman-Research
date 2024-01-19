import type { Meta, StoryObj } from "@storybook/react";

import { DarkNavCompactHeader } from "./DarkNavCompactHeader";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: DarkNavCompactHeader,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DarkNavCompactHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DarkNavWithCompactWhitePageHeader: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import { ConstrainedStickyColumns } from "./ConstrainedStickyColumns";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: ConstrainedStickyColumns,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ConstrainedStickyColumns>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConstrainedWithStickyColumns: Story = {};

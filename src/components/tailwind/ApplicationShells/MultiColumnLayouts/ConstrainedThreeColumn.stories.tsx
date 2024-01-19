import type { Meta, StoryObj } from "@storybook/react";

import { ConstrainedThreeColumn as ConstrainedThreeColumnComponent } from "./ConstrainedThreeColumn";

const meta = {
  title: "Application Shells/Multi-Column Layouts",
  component: ConstrainedThreeColumnComponent,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ConstrainedThreeColumnComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConstrainedThreeColumn: Story = {};

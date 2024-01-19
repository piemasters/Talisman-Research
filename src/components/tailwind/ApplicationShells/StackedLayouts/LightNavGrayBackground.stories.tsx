import type { Meta, StoryObj } from "@storybook/react";

import { LightNavGrayBackground } from "./LightNavGrayBackground";

const meta = {
  title: "Application Shells/Stacked Layouts",
  component: LightNavGrayBackground,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="h-full bg-gray-100">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LightNavGrayBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightGray: Story = {};

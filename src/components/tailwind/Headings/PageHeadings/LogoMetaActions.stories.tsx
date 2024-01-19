import type { Meta, StoryObj } from "@storybook/react";

import { LogoMetaActions } from "./LogoMetaActions";

const meta = {
  title: "Headings/Page Headings",
  component: LogoMetaActions,
  decorators: [
    (Story) => (
      <div className="bg-white py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof LogoMetaActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLogoAndMetaAndActions: Story = {};

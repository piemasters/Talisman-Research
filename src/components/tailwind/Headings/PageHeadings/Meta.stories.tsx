import type { Meta, StoryObj } from "@storybook/react";

import { Meta as MetaComponent } from "./Meta";

const meta = {
  title: "Headings/Page Headings",
  component: MetaComponent,
  decorators: [
    (Story) => (
      <div className="bg-white p-8">
        <div className="mx-auto max-w-7xl">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof MetaComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMetaAndActions: Story = {};

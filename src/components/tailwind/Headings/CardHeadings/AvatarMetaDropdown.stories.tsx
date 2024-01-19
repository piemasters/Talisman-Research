import type { Meta, StoryObj } from "@storybook/react";

import Component from "./AvatarMetaDropdown";

const meta = {
  title: "Headings/Card Headings",
  component: Component,
  decorators: [
    (Story) => (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-none">
            <div className="overflow-hidden bg-white sm:rounded-lg sm:shadow">
              <Story />
              <div className="px-4 pb-5 opacity-25 sm:p-6 sm:pt-0">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                  impedit sapiente recusandae iusto officiis dolor? Laborum
                  quibusdam quam, quidem vel assumenda repellat inventore sint
                  nesciunt, ullam asperiores magnam placeat eveniet. Aliquam
                  voluptatibus assumenda distinctio veniam quam tempora modi
                  aperiam nemo voluptate reprehenderit quidem, nisi vero est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithAvatarAndMetaAndDropdown: Story = {};

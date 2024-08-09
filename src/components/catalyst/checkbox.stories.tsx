import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup, CheckboxField } from "./checkbox";
import { Description, Fieldset, Label, Legend } from "./fieldset";
import { Text } from "./text";

const meta = {
  title: "Catalyst/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: [
        "dark/zinc",
        "light",
        "dark/white",
        "dark",
        "white",
        "zinc",
        "indigo",
        "cyan",
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "sky",
        "blue",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
      ],
      control: "select",
    },
    className: {
      control: "text",
    },
    // children: {
    //   control: "text",
    // },
  },
  decorators: [
    (Story) => (
      <div className="h-full bg-white dark:bg-gray-900">
        <div className="px-4 py-8">
          <div className="flex flex-col items-center justify-start max-w-3xl mx-auto space-y-4 sm:flex-row sm:items-end sm:justify-around sm:space-y-0">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Core: Story = {
  args: {
    color: "dark",
    className: "",
    indeterminate: false,
  },
  render: ({ ...args }) => (
    <Fieldset>
      <Legend>Discoverability</Legend>
      <Text>Decide where your events can be found across the web.</Text>
      <CheckboxGroup>
        <CheckboxField>
          <Checkbox
            name="discoverability"
            value="show_on_events_page"
            defaultChecked
            {...args}
          />
          <Label>Show on events page</Label>
          <Description>Make this event visible on your profile.</Description>
        </CheckboxField>
        <CheckboxField>
          <Checkbox name="discoverability" value="allow_embedding" {...args} />
          <Label>Allow embedding</Label>
          <Description>
            Allow others to embed your event details on their own site.
          </Description>
        </CheckboxField>
      </CheckboxGroup>
    </Fieldset>
  ),
};

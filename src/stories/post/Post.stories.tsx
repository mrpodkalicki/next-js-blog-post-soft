import { Post as PostComponent } from "./Post";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { postData } from "./mockData";

export default {
  title: "Example/Post",
  component: PostComponent,
  argTypes: {},
} as ComponentMeta<typeof PostComponent>;

const Template: ComponentStory<typeof PostComponent> = (args) => (
  <PostComponent {...args} />
);

export const Post = Template.bind({});

Post.args = {
  ...postData,
};

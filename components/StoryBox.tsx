import { JSX } from 'preact';

interface StoryBoxProps extends JSX.HTMLAttributes {
  title: string;
}

export default function StoryBox(props: StoryBoxProps) {
  return (
    <div class="border-gray-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-gray-200 text-gray-700 font-sans">
      <h1 class="text-xl font-semibold text-center">{props.title}</h1>
      <br />
      {props.children}
    </div>
  );
}

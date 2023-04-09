import { JSX } from 'preact';

interface StoryBoxProps extends JSX.HTMLAttributes {
  title: string;
}

export default function StoryBox(props: StoryBoxProps) {
  return (
    <div class="bg-white border-0 shadow-lg rounded-lg w-3/4 py-16 px-16 text-gray-900 font-sans">
      <h1 class="text-xl font-semibold text-center">{props.title}</h1>
      <br />
      {props.children}
    </div>
  );
}

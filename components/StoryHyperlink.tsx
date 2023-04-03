import { JSX } from 'preact';

export default function StoryHyperlink(
  props: JSX.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a href={props.href} class="underline text-blue-500">
      {props.children}
    </a>
  );
}

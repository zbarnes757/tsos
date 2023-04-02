import { JSX } from 'preact';

export default function ScriptureQuote(
  props: JSX.HTMLAttributes<HTMLSpanElement>
) {
  return <span class="italic font-semibold">{props.children}</span>;
}

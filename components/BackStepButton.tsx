import { JSX } from 'preact';

export default function BackStepButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a
      href={props.href}
      class="rounded-md bg-white px-7 py-3 text-gray-900 font-semibold text-lg flex pl-5 items-center hover:bg-gray-400 tracking-wide shadow-lg hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-7 h-7 stroke-2 stroke-gray-800"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      {props.content}
    </a>
  );
}

import { JSX } from 'preact';

export default function BackStepButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a
      href={props.href}
      class="cursor-pointer rounded-md bg-gray-600 px-5 py-3 text-gray-200 font-semibold text-lg flex pl-2 items-center hover:text-gray-400 tracking-wide"
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

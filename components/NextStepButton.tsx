import { JSX } from 'preact';

export default function NextStepButton(
  props: JSX.HTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a
      href={props.href}
      class="cursor-pointer rounded-md bg-white px-7 py-3 text-gray-900 font-semibold text-lg flex pr-5 items-center tracking-wide shadow-lg
       hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
      "
    >
      {props.content}
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  );
}

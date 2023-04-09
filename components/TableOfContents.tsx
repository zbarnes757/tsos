interface TableOfContentsProps {
  currentPath: string;
}

export default function TableOfContents({ currentPath }: TableOfContentsProps) {
  const pages = [
    { href: '/', text: 'Home' },
    { href: '/in_the_beginning', text: 'In the Beginning' },
    { href: '/the_fall', text: 'The Fall' },
    { href: '/the_problem', text: 'The Problem' },
    { href: '/the_solution', text: 'The Solution' },
    { href: '/a_covenant_people', text: 'A Covenant People' },
    { href: '/a_covenant_king', text: 'A Covenant King' },
    { href: '/exile', text: 'Exile' },
    { href: '/return_to_the_land', text: 'Return to the Land' },
    { href: '/christ_has_come', text: 'Christ has Come' },
    { href: '/the_already_but_not_yet', text: 'The Already But Not Yet' },
    { href: '/end_of_the_age', text: 'End of the Age' },
  ];

  return (
    <div class="bg-gray-100 pt-5 px-10 h-full">
      <ol>
        {pages.map(({ href, text }) => (
          <li
            class={
              href === currentPath
                ? 'pt-4 font-semibold underline hover:no-underline'
                : 'pt-4 hover:underline'
            }
          >
            <a href={href}>{text}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}

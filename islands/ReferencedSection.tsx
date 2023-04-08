import { useEffect } from 'preact/hooks';

interface Props {
  id: string;
  selected: boolean;
  content: string;
}

export default function ReferencedSection({ id, selected, content }: Props) {
  useEffect(() => {
    setTimeout(() => {
      const el = document.querySelector(`#${id}`);
      if (el) {
        el.classList.remove('bg-purple-800');
      }
    }, 500);
  }, [id]);

  return (
    <span
      id={id}
      class={
        selected
          ? 'transition-colors ease-in duration-700 bg-purple-800 font-semibold'
          : ''
      }
    >
      {content}
    </span>
  );
}

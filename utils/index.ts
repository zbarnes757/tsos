import { PageProps } from '$fresh/server.ts';

export const isSelectedID = (props: PageProps, id: string): boolean => {
  const search = new URLSearchParams(props.url.search);
  return search.get('ref') === id;
};

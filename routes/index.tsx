import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryBox from '../components/StoryBox.tsx';
import StoryHyperlink from '../components/StoryHyperlink.tsx';
import TableOfContents from '../components/TableOfContents.tsx';

export default function Home(props: PageProps) {
  const currentPath = props.route;

  return (
    <>
      <Head>
        <title>The Story of Scripture</title>
      </Head>
      <TableOfContents currentPath={currentPath} />
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <StoryBox title="Welcome to the Story of Scripture">
          <p>
            Here we will explore the interconnected story of the Bible. By
            stepping through each act, we will explore how each is part of a
            comprehensive whole. As we go, you will encounter{' '}
            <StoryHyperlink href="#">hyperlinks</StoryHyperlink> to other parts
            of the story. This is intended to help you understand how each part
            of the story is connected to the rest.
            <br />
            <br />
            Shall we begin?
          </p>
        </StoryBox>

        <div class="pt-10">
          <NextStepButton
            href="/in_the_beginning"
            content="In the beginning..."
          />
        </div>
      </div>
    </>
  );
}

import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryBox from '../components/StoryBox.tsx';
import StoryHyperlink from '../components/StoryHyperlink.tsx';
import TableOfContents from '../components/TableOfContents.tsx';

export default function TheFall({ route: currentPath }: PageProps) {
  return (
    <>
      <Head>
        <title>The Problem Continues</title>
      </Head>
      <TableOfContents currentPath={currentPath} />
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <StoryBox title="The Problem Continues">
          <p>
            Outside the Garden, evil begins to spread. The first two humans
            born, Cain and Able, present their offerings to God. While God
            accepted Abel's offering, Cain's was rejected, and he became angry
            and jealous. Eventually, Cain murdered Abel and was banished by God.
          </p>
          <br />
          <p>
            The genealogy that follows is a list of people who lived and died.
            The emphasis is on the death they all but one experience. The
            consequences of sin have infected all humanity at this point. So
            much so that God plans to wipe out humanity and start afresh with
            one person and his family.
          </p>
          <br />
          <p>
            He instructed Noah to build an ark and gather two of every kind of
            animal. After the flood, God made a covenant with Noah, promising
            never to destroy the earth with a flood again. However, they are
            only off the boat for a short time before sin raises its head again
            in Noah's own family. The cycle begins again.
          </p>
          <br />
          <p>
            The humans that descended from Noah and his family come together to
            build a tower to reach the heavens. It is the ultimate vanity
            project.{' '}
            <StoryHyperlink href="/end_of_the_age?ref=all_nations">
              Before they could finish, God confused their language and
              scattered them across the earth, resulting in the creation of
              different languages and cultures.
            </StoryHyperlink>
          </p>
        </StoryBox>

        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/the_fall" content="Back" />
          <NextStepButton href="/the_solution" content="Next" />
        </div>
      </div>
    </>
  );
}

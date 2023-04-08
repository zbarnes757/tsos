import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import ReferencedSection from '../islands/ReferencedSection.tsx';
import { isSelectedID } from '../utils/index.ts';

export default function TheSolution(props: PageProps) {
  return (
    <>
      <Head>
        <title>A Solution is Promised</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">
            A Solution is Promised
          </h1>
          <br />
          <p>
            The story takes a turn and focuses on one man and his family. His
            name is Abram (later Abraham) and his wife is Sarai (later Sarah).
            God calls Abram and tells him to go to the land he will show him.
            God makes an unconditional covenant with Abram.{' '}
            <ReferencedSection
              id="abrahamic_covenant"
              selected={isSelectedID(props, 'abrahamic_covenant')}
              content="He promises to give him land, and a people, and that through him, all the nations would be blessed."
            />
          </p>
          <br />
          <p>
            When Abram, now Abraham, is 99 years old, he finally has a son,
            Isaac. God was faithful to his promise. Isaac goes on to marry and
            have two boys. Their names are Esau and Jacob. While there is strife
            between them, Jacob is chosen to be the carrier of the promise of
            God. Jacob then has 12 sons of his own. The nation is being built,
            one generation at a time.
          </p>
          <br />
          <p>
            Through a twist of events that the sons of Jacob intended for evil
            but God used for good, the descendants of Abraham are led into
            Egypt. In each generation, there is blatant dysfunction and sin but
            God always sees his promises come to fruition.
          </p>
        </div>
        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/the_problem" content="Back" />
          <NextStepButton href="/a_covenant_people" content="Next" />
        </div>
      </div>
    </>
  );
}

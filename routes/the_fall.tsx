import { Head } from '$fresh/runtime.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryHyperlink from '../components/StoryHyperlink.tsx';

export default function TheFall() {
  return (
    <>
      <Head>
        <title>The Fall</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">Mankind's Folly</h1>
          <br />
          <p>
            In the{' '}
            <StoryHyperlink href="/in_the_beginning#the-garden">
              Garden of Eden
            </StoryHyperlink>
            , Adam and Eve lived in perfect harmony with God, but this was not
            to last. One day, a serpent slithered up to Eve and asked her if God
            had really commanded them not to eat from any tree in the garden.
            The serpent went on to say that God was actually trying to keep them
            from becoming like him, knowing good and evil. Eve was tempted and
            took some of the fruit from the tree of the knowledge of good and
            evil and ate it. After she had eaten, she gave some to Adam, who was
            with her, and he ate it too.
          </p>
          <br />
          <p>
            Suddenly, they realized they were naked and felt ashamed. They tried
            to cover themselves with leaves, and when they heard God walking in
            the garden, they hid. God called to them, but they did not answer.
            Finally, they admitted that they had disobeyed his command not to
            eat from the tree. Adam blamed Eve, and Eve blamed the serpent.
          </p>
          <br />
          <p>
            As a result of their disobedience, God punished them. He cursed the
            serpent, making it crawl on its belly and eat dust. He made
            childbirth painful for Eve and said that Adam would have to work
            hard to grow food from the ground. God banished them from the Garden
            of Eden and placed cherubim to guard the way to the tree of life.
          </p>
          <br />
          <p>
            God does leave them with a promise though. One day someone will come
            who will crush the head of the serpent. All is not lost.
          </p>
        </div>
        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/in_the_beginning" content="Back" />
          <NextStepButton href="/the_problem" content="Next" />
        </div>
      </div>
    </>
  );
}

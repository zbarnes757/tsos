import { Head } from '$fresh/runtime.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';

export default function ReturnToTheLand() {
  return (
    <>
      <Head>
        <title>Return to the Land</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">Return to the Land</h1>
          <br />
          <p>
            Despite their disobedience, God remained faithful to His covenant
            with Abraham and promised to bring His people back to the land.
            After seventy years of exile, the Persian king Cyrus allowed the
            Jews to return to Jerusalem and rebuild the temple. The prophets
            Ezra and Nehemiah led the people in this effort.
          </p>
          <br />
          <p>
            However, even after their return to the land, the Jews still
            struggled with sin and disobedience. They no longer worshipped idols
            but they turned to self-righteous legalism. They also never forgot
            the promise made back to Abraham. They longed for the promised
            Messiah to come. They waited eagerly for their messiah to save them
            from the oppressive kingdoms that ruled them.
          </p>
        </div>
        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/exile" content="Back" />
          <NextStepButton href="#" content="Next" />
        </div>
      </div>
    </>
  );
}

import { Head } from '$fresh/runtime.ts';
import NextStepButton from '../components/NextStepButton.tsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Story of Scripture</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">
            Welcome to the Story of Scripture
          </h1>
          <br />
          <p>
            Here we will explore the interconnected story of the Bible. By
            stepping through each act, we will explore how each is part of a
            comprehensive whole. As we go, you will encounter{' '}
            <a href="#" class="underline text-blue-500">
              hyperlinks
            </a>{' '}
            to other parts of the story. This is intended to help you understand
            how each part of the story is connected to the rest.
            <br />
            <br />
            Shall we begin?
          </p>
        </div>
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

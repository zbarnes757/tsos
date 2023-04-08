import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import ReferencedSection from '../islands/ReferencedSection.tsx';
import { isSelectedID } from '../utils/index.ts';

export default function EndOfTheAge(props: PageProps) {
  return (
    <>
      <Head>
        <title>End of the Age</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">End of the Age</h1>
          <br />
          <p>
            The end of the story will mark the end of this present age, which
            will come when Jesus Christ returns in all his power. At that time,
            the dead will be raised from the grave and judged by Jesus. Those
            who lived in rebellion against God will be cast into eternal fire,
            while those who believed in the Lord Jesus Christ will be saved.
          </p>
          <br />
          <p>
            The earth will be remade and a new Jerusalem, both a city and a
            garden, will be the center of all things. The glory of God will
            illuminate everything, so the Sun and Moon will not be necessary.
            <ReferencedSection
              id="all_nations"
              selected={isSelectedID(props, 'all_nations')}
              content="All nations, tribes, and languages will be present and worshipping the Lord."
            />
          </p>
          <br />
          <p>
            This glorious end is our eternal hope, and we eagerly await the day
            when everything will be made right.
          </p>
        </div>
        <div class="pt-10">
          <BackStepButton href="/the_already_but_not_yet" content="Back" />
        </div>
      </div>
    </>
  );
}

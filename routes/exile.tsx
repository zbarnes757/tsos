import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryBox from '../components/StoryBox.tsx';
import TableOfContents from '../components/TableOfContents.tsx';

export default function Exile({ route: currentPath }: PageProps) {
  return (
    <>
      <Head>
        <title>Exile</title>
      </Head>
      <TableOfContents currentPath={currentPath} />
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <StoryBox title="Exile">
          <p>
            After David's reign, his son Solomon became king. Solomon was known
            for his wisdom and wealth, but he also made some poor decisions that
            ultimately led to the division of the kingdom. After his death, the
            kingdom split in two, with ten tribes forming the northern kingdom
            of Israel and two tribes forming the southern kingdom of Judah.
          </p>
          <br />
          <p>
            The northern kingdom had an endless succession of wicked kings who
            led the people further and further from God. They setup false idols
            and encouraged the people to worship them. The southern kingdom had
            a handful good kings who tried to lead the people back to God, but
            ultimately they were ruled by kings just as wicked as the nothern
            kingdom.
          </p>
          <br />
          <p>
            Eventually, both kingdoms were exiled to Babylon, as God had warned
            would happen if they did not turn back to Him. The Babylonians
            destroyed the temple in Jerusalem and took the people captive,
            forcing them to live in a foreign land.
          </p>
        </StoryBox>

        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/a_covenant_king" content="Back" />
          <NextStepButton href="/return_to_the_land" content="Next" />
        </div>
      </div>
    </>
  );
}

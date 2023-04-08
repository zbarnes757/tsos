import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import ReferencedSection from '../islands/ReferencedSection.tsx';
import { isSelectedID } from '../utils/index.ts';

export default function ACovenantKing(props: PageProps) {
  return (
    <>
      <Head>
        <title>A Covenant King</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">A Covenant King</h1>
          <br />
          <p>
            After Joshua's death, the Israelites are led by a series of judges,
            who act as both political and spiritual leaders. However, the
            Israelites continually stray from God and suffer the consequences of
            their disobedience. This cycle of sin, oppression, repentance, and
            deliverance is repeated throughout the time of the judges.
          </p>
          <br />
          <p>
            Eventually, the Israelites demand a king to rule over them like the
            other nations. God warns them that a king will take their sons and
            daughters, their best fields and vineyards, and turn them into his
            own personal servants. However, the Israelites insist, and God
            allows them to have a king.
          </p>
          <br />
          <p>
            The first king of Israel is Saul, who is chosen by God through the
            prophet Samuel. At first, Saul is a good king, but he eventually
            disobeys God and is rejected by Him. God chooses David, a shepherd
            boy, to be the next king of Israel. David is anointed by Samuel and
            defeats the giant Goliath with a sling and a stone.
          </p>
          <br />
          <p>
            David becomes a great king, expanding the borders of Israel and
            establishing Jerusalem as its capital. He is known as a man after
            God's own heart and writes many of the Psalms. However, he is not
            without his faults and sins, including committing adultery with
            Bathsheba and arranging for her husband Uriah to be killed in
            battle.
          </p>
          <br />
          <p>
            <ReferencedSection
              id="davidic_covenant"
              selected={isSelectedID(props, 'davidic_covenant')}
              content="Despite his sins, God promises that the Messiah will come from David's line, and David's reign is seen as a foreshadowing of the reign of Christ."
            />
          </p>
        </div>
        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/a_covenant_people" content="Back" />
          <NextStepButton href="/exile" content="Next" />
        </div>
      </div>
    </>
  );
}

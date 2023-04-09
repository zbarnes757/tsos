import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryBox from '../components/StoryBox.tsx';
import TableOfContents from '../components/TableOfContents.tsx';
import ReferencedSection from '../islands/ReferencedSection.tsx';
import { isSelectedID } from '../utils/index.ts';

export default function InTheBeginning(props: PageProps) {
  const currentPath = props.route;

  return (
    <>
      <Head>
        <title>In the beginning</title>
      </Head>
      <TableOfContents currentPath={currentPath} />

      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <StoryBox title="Our Creator God">
          <p>
            In the beginning, there was nothing except for God. And then, God
            spoke, and the universe came into being. He created the heavens and
            the earth, and with each passing day, He brought forth new life.
          </p>
          <br />
          <p>
            After creating the sun, the moon, and the stars, God turned His
            attention to the earth. He brought forth plants and animals of every
            kind, and with each new creation, God declared His work as "good."{' '}
          </p>
          <br />
          <p>
            But the crowning achievement of God's creative work came on the
            sixth day when He made man and woman in His image. He tasked them
            with a mandate of ruling over the earth and all its creatures.
          </p>
          <br />
          <p>
            <ReferencedSection
              id="the_garden"
              selected={isSelectedID(props, 'the_garden')}
              content="God created a land called Eden and placed a garden within it."
            />
            There he placed the first man, Adam, where he tended to plants and
            animals. God gave Adam one commandment: "You may surely eat of every
            tree of the garden, but of the tree of the knowledge of good and
            evil you shall not eat, for in the day that you eat of it you shall
            surely die."
          </p>
          <br />
          <p>Adam and Eve lived in perfect harmony with God.</p>
        </StoryBox>

        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/" content="Back" />
          <NextStepButton href="/the_fall" content="Next" />
        </div>
      </div>
    </>
  );
}

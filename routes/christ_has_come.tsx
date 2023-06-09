import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryBox from '../components/StoryBox.tsx';
import StoryHyperlink from '../components/StoryHyperlink.tsx';
import TableOfContents from '../components/TableOfContents.tsx';
import ReferencedSection from '../islands/ReferencedSection.tsx';
import { isSelectedID } from '../utils/index.ts';

export default function ChristHasCome(props: PageProps) {
  const currentPath = props.route;
  return (
    <>
      <Head>
        <title>Christ Has Come</title>
      </Head>
      <TableOfContents currentPath={currentPath} />
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <StoryBox title="Christ Has Come">
          <p>
            Finally, thousands of years after covenants were made with{' '}
            <StoryHyperlink href="/the_solution?ref=abrahamic_covenant">
              Abraham
            </StoryHyperlink>
            ,{' '}
            <StoryHyperlink href="/a_covenant_people?ref=mosaic_covenant">
              Moses
            </StoryHyperlink>
            , and{' '}
            <StoryHyperlink href="/a_covenant_king?ref=davidic_covenant">
              David
            </StoryHyperlink>
            , the promised Messiah arrived. Jesus Christ was born to the Virgin
            Mary in a small town and grew up in Nazareth in the north of
            Palestine. He lived in relative obscurity for about 30 years before
            beginning his public ministry.
          </p>
          <br />
          <p>
            During the 3 years that he was active, he proclaimed that the
            Kingdom of God was at hand while healing many people. His teachings
            drew enormous crowds and provoked the religious elites to jealousy.
            They conspired to kill him because of their envy. Had they opened
            their eyes, they would have seen him as the Messiah, the God-Man
            promised to them. Instead, they only focused on their own desires.
          </p>
          <br />
          <p>
            Jesus was betrayed by one of his 12 main disciples during the week
            of Passover. He was tried by Pontius Pilate and then crucified, even
            though no charges were substantiated. After he died, he was taken
            off the cross and buried in a tomb. On the third day, he rose from
            the grave, proving the claims he had made all along.{' '}
            <ReferencedSection
              id="promised"
              selected={isSelectedID(props, 'promised')}
              content="He had conquered the power of the serpent."
            />{' '}
            He met with his disciples after his resurrection and appeared to
            many more people.
          </p>
          <br />
          <p>
            After 40 days, Jesus ascended into Heaven, where he sits at the
            right hand of the Father and waits to come again.
          </p>
        </StoryBox>

        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/return_to_the_land" content="Back" />
          <NextStepButton href="/the_already_but_not_yet" content="Next" />
        </div>
      </div>
    </>
  );
}

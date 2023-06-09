import { Head } from '$fresh/runtime.ts';
import { PageProps } from '$fresh/server.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import StoryBox from '../components/StoryBox.tsx';
import TableOfContents from '../components/TableOfContents.tsx';
import ReferencedSection from '../islands/ReferencedSection.tsx';
import { isSelectedID } from '../utils/index.ts';

export default function ACovenantPeople(props: PageProps) {
  const currentPath = props.route;
  return (
    <>
      <Head>
        <title>A Covenant People</title>
      </Head>
      <TableOfContents currentPath={currentPath} />
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <StoryBox title="A Covenant People">
          <p>
            The story jumps ahead 500 years, as the descendants of Jacob, known
            as Israel, are now living as slaves in Egypt. Despite their growth
            in numbers and might as a nation, they are not in the land that was
            promised to them. The new Pharaoh despises them and works them
            harder and harder.
          </p>
          <br />
          <p>
            From among the Israelites, a prophet named Moses is raised up. He is
            the messenger God uses to deliver his people from slavery. Moses
            goes before Pharaoh to ask that the Israelites be allowed to go and
            worship their God. Pharaoh refuses, and so God sends plagues to
            display his power and authority. It takes ten plagues and many
            deaths before Pharaoh relents and sets the people free. As they
            escape, the Israelites plunder the Egyptians.
          </p>
          <br />
          <p>
            Their escape takes them into the desert wilderness between Egypt and
            Palestine.{' '}
            <ReferencedSection
              id="mosaic_covenant"
              selected={isSelectedID(props, 'mosaic_covenant')}
              content=" They camp at the foot of Mount Sinai, where God makes another covenant with them through the mediator Moses."
            />{' '}
            This covenant is conditional on the Israelites upholding their end
            of it. It is designed to make them into the type of people that
            should inhabit the land and comes with blessings for obedience and
            curses for disobedience.
          </p>
          <br />
          <p>
            They leave Sinai and wander in the wilderness for forty years,
            during which God transforms them into his people. Moses dies just
            before they enter their promised land, and Joshua succeeds him.
            Joshua leads the people into the land, and they settle it.
          </p>
        </StoryBox>

        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/the_solution" content="Back" />
          <NextStepButton href="/a_covenant_king" content="Next" />
        </div>
      </div>
    </>
  );
}

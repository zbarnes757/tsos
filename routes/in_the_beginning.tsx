import { Head } from '$fresh/runtime.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';
import ScriptureQuote from '../components/ScriptureQuote.tsx';

export default function InTheBeginning() {
  return (
    <>
      <Head>
        <title>In the beginning</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">Our Story Begins</h1>
          <br />
          <p>
            The first thing we learn about the Lord is that he is a creator.{' '}
            <ScriptureQuote>
              "In the beginning, God created the heavens and the earth"
            </ScriptureQuote>{' '}
            (Gen 1:1). Everything else we come to learn about God is centered on
            this fact. For the rest of the first chapter, we see his artistic
            work on display as he creates day after day. After each feat of
            creation, God declares his work as "good". His creation culminates
            in the making of humanity when he declares he will{' '}
            <ScriptureQuote>
              "make man in our image, according to our likeness"
            </ScriptureQuote>{' '}
            (Gen 1:26a). These new creatures have a mandate not shared with the
            rest of creation. They are tasked with{' '}
            <ScriptureQuote>
              "ruling over the fish of the sea, the birds of the sky, the
              livestock, the whole earth, and the creatures that crawl on the
              earth"
            </ScriptureQuote>{' '}
            (Gen 1:26b). After creating humanity, God blesses them and commands
            them to be fruitful and multiply, fill the earth, subdue it, and
            rule over it (Gen 1:28). He exuberantly declares that this final
            creation is "very good indeed" (Gen 1:31)!
          </p>
          <br />
          <p>
            Chapter 2 retells the creation narrative but focuses on the creation
            of humanity. In this chapter, we learn about the creation of Adam
            and Eve and their life in the Garden of Eden. It tells us that God
            formed man from the dust of the ground and breathed into his
            nostrils the breath of life, and man became a living being. Then,
            God planted a garden in Eden and put Adam there to work it and take
            care of it. God also gave a commandment to Adam, the first
            commandment in Scripture, instructing him{' '}
            <ScriptureQuote>
              "you may surely eat of every tree of the garden, but of the tree
              of the knowledge of good and evil you shall not eat, for in the
              day that you eat of it you shall surely die"
            </ScriptureQuote>{' '}
            (Gen 2:16-17).
          </p>
          <br />
          <p>The foreshadowing is palpable…</p>
        </div>
        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/" content="Back" />
          <NextStepButton href="#" content="Next" />
        </div>
      </div>
    </>
  );
}

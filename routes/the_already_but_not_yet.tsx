import { Head } from '$fresh/runtime.ts';
import BackStepButton from '../components/BackStepButton.tsx';
import NextStepButton from '../components/NextStepButton.tsx';

export default function ChristHasCome() {
  return (
    <>
      <Head>
        <title>The Already but Not Yet</title>
      </Head>
      <div class="p-4 mx-auto flex-grow flex flex-col w-3/4 justify-center items-center">
        <div class="border-yellow-600	border-4 rounded-lg w-3/4 py-5 px-8 bg-yellow-200 text-gray-700 font-sans">
          <h1 class="text-xl font-semibold text-center">
            The Already but Not Yet
          </h1>
          <br />
          <p>
            The story continues with the disciples waiting in Jerusalem for the
            promised Holy Spirit. On the day of Pentecost, the Holy Spirit comes
            upon them, and they begin to speak in other languages. Peter
            preaches a sermon, and 3,000 people are saved.
          </p>
          <br />
          <p>
            The disciples begin to perform many miracles, and the church grows
            rapidly. However, they also face persecution from the religious
            leaders and the Roman government. Stephen becomes the first
            Christian martyr. Peter is the first to bring the Gospel to the
            Gentiles because of a vision God gave him.
          </p>
          <br />
          <p>
            After Stephen's death, Saul (later known as Paul) begins to
            persecute the church. But on the road to Damascus, he has a vision
            of Jesus and becomes a Christian himself. He begins to preach the
            gospel to both Jews and Gentiles, and the church continues to grow.
          </p>
          <br />
          <p>
            The church faces conflicts over circumcision and other issues, but
            they are resolved through the leadership of the apostles. The
            historical portion of the story ends with Paul under house arrest in
            Rome, continuing to preach the gospel to all who will listen.
          </p>
        </div>
        <div class="pt-10 w-full flex  justify-evenly">
          <BackStepButton href="/christ_has_come" content="Back" />
          <NextStepButton href="/end_of_the_age" content="Next" />
        </div>
      </div>
    </>
  );
}

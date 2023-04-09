import { AppProps } from '$fresh/server.ts';

export default function App({ Component }: AppProps) {
  return (
    <body class="bg-green-300 flex flex-row h-screen">
      <Component />
    </body>
  );
}

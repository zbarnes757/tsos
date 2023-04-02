import { AppProps } from '$fresh/server.ts';

export default function App({ Component }: AppProps) {
  return (
    <body class="bg-yellow-100 flex flex-col h-screen">
      <Component />
    </body>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";

interface MyAppProps extends AppProps {
  Component: NextPageWidthLayout;
}

type NextPageWidthLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page); //레이아웃이 있으면 넣고 아니면 페이지 그대로 반환
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;

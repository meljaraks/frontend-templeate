import "../styles/globals.css";
import * as NextImage from "next/image";
import { setupWorker, rest } from "msw";

NextImage.defaultProps = {
  unoptimized: true,
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

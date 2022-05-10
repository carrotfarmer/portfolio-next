import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/josefin-sans/700.css";
import "@fontsource/josefin-sans/400.css";

import "@fontsource/barlow";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL && process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
        <Script
          src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
          strategy="lazyOnload"
        />
      )}
      <NextSeo
        title="Dhruva | Web Developer"
        titleTemplate="Dhruva | Web Developer"
        defaultTitle="Dhruva | Web Developer"
        description="Hi, I'm Dhruva, a web developer, blogger, and student!"
        openGraph={{
          url: "https://dhruva.is-a.dev/",
          title: "Dhruva | Web Developer",
          description: "Hi, I'm Dhruva, a web developer, blogger and a student!",
          images: [
            {
              url: "https://res.cloudinary.com/db9rnrbbn/image/upload/v1652117453/ud_j4oybq.png",
              width: 1200,
              height: 630,
              alt: "Dhruva | Web Developer",
            },
          ],
        }}
        twitter={{
          handle: "@carrotfarmer",
          site: "@carrotfarmer",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "dhruva, tech, developer, web, blogger, tech enthusiast, backend developer, web developer",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assests/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

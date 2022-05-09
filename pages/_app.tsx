import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/josefin-sans/700.css";
import "@fontsource/josefin-sans/400.css";

import "@fontsource/barlow";

import { NextSeo } from "next-seo";
import Head from "next/head";
// import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script */}
      {/* 	strategy="lazyOnload" */}
      {/* 	src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} */}
      {/* /> */}

      {/* <Script id="google-analytics" strategy="lazyOnload"> */}
      {/* 	{` */}
      {/*          window.dataLayer = window.dataLayer || []; */}
      {/*          function gtag(){dataLayer.push(arguments);} */}
      {/*          gtag('js', new Date()); */}
      {/*          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', { */}
      {/*            page_path: window.location.pathname, */}
      {/*          }); */}
      {/*              `} */}
      {/* </Script> */}
      <NextSeo
        title="Dhruva | Web Developer"
        titleTemplate="Dhruva | Web Developer"
        defaultTitle="Dhruva | Web Developer"
        description="Hi, I'm Dhruva, a web developer, blogger and a student!"
        openGraph={{
          url: "https://dhruva.is-a.dev/",
          title: "Dhruva | Web Developer",
          description: "Hi, I'm Dhruva, a web developer, blogger and a student!",
          // images: [
          //   {
          //     url: "https://res.cloudinary.com/ddum5vpp3/image/upload/v1643532760/og-image_dwcwhp.png",
          //     width: 800,
          //     height: 420,
          //     alt: "Anurag | Frontend Developer",
          //   },
          // ],
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

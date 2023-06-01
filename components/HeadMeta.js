import Head from "next/head";

const HeadMeta = ({ title, description, url, image }) => {
  return (
    <Head>
      <title>{title || "Mind Playground"}</title>
      <meta
        name="description"
        content={description || "심심한 사람들을 위한 심리놀이터!"}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || "Mind Playground"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="Mind Playground" />
    </Head>
  );
};

export default HeadMeta;

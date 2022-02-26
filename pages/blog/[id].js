import Head from "next/head";
import { format, parseISO } from "date-fns";

import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <>
      <div>
        <Head>
          <title>{postData.title}</title>
          <meta name="description" content={postData.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="prose break-normal">
          <div className="mb-4">
            <h2 className="md:text-3xl text-xl font-bold">{postData.title}</h2>

            <div className="text-gray-600 text-xs">
              {format(parseISO(postData.date), "d. MMMM uuu")}
            </div>
          </div>

          <div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
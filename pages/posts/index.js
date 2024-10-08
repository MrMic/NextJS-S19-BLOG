import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";
import { Fragment } from "react";


function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="A list of all my posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  )
}

// ______________________________________________________________________
export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts
    },
    // revalidate: 60
  }

}

export default AllPostPage;

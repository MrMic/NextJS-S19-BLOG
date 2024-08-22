import { Fragment } from "react";

import Hero from "@/components/home-page/hero";
import FeaturePosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";


function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}

// ______________________________________________________________________
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    },
    // revalidate: 60
  }

}

export default HomePage;

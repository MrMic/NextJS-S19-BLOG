import { Fragment } from "react";

import Hero from "@/components/home-page/hero";
import FeaturePosts from "@/components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and API servers a breeze, even for large apps.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-2",
    title: "Getting Started with NextJS 2",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and API servers a breeze, even for large apps.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-3",
    title: "Getting Started with NextJS 3",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and API servers a breeze, even for large apps.",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs-4",
    title: "Getting Started with NextJS 4",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework for production - it makes building fullstack React apps and API servers a breeze, even for large apps.",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;

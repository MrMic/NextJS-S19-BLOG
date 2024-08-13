import AllPosts from "@/components/posts/all-posts";



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

function AllPostPage() {
  return (
    <AllPosts posts={DUMMY_POSTS} />
  )
}

export default AllPostPage;

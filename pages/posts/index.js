import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";


function AllPostPage(props) {
  return (
    <AllPosts posts={props.posts} />
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

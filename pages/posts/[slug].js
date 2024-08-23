import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "@/lib/posts-util";

function PostDetailPage(props) {
  return (
    <PostContent post={props.post} />
  )
}

// ______________________________________________________________________
export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  };
}

// ______________________________________________________________________
export function getStaticPaths() {
  const postFilenames = getPostFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false
  }
}


export default PostDetailPage;

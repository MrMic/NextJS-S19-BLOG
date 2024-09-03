import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

// ______________________________________________________________________
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

// ______________________________________________________________________
export function getAllPosts() {
  const postFiles = getPostFiles();

  const allPosts = postFiles.map((fileName) => {
    return getPostData(fileName);
  });

  const sortedPosts = allPosts.sort((postA, postB) => {
    if (postA.date > postB.date) {
      return -1;
    } else {
      return 1;
    }
  });

  return sortedPosts;
}

// ______________________________________________________________________
export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}

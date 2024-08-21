import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDirectory = path.join(process.cwd(), 'posts');

// ______________________________________________________________________
function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postslug = fileName.replace(/\.md$/, '');
  const postData = {
    slug: postslug,
    ...data,
    content,
  };
  return postData;
}

// ______________________________________________________________________
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

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

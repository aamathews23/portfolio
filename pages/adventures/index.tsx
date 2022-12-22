import { readdir, readFile } from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import {
  attributes as pageModel,
  react as Content,
} from '../../content/pages/adventures.md';
import Page from '../../components/layout/Page';
import PostSection from '../../components/posts/Section';
import NotFound from '../../components/global/NotFound';
import CollectionType from '../../types/posts/Collection';
import PostType from '../../types/posts/Post';

// The blog page type
type BlogPageType = {
  collections: CollectionType[];
};

/**
 * Serves the blog page of the site
 *
 * @param {Array<Collection>} collections
 * @returns a blog page component
 */
const BlogPage = ({ collections }: BlogPageType) => {
  return (
    <>
      <Content />
      <Page
        title={pageModel.title}
        description={pageModel.description}
        previewImg={pageModel.previewImg}
      >
        {collections && collections.length > 0 ? (
          collections.map((collection, index) => (
            <PostSection
              key={index}
              title={collection.title}
              posts={collection.posts}
            />
          ))
        ) : (
          <NotFound text={pageModel.notFound} />
        )}
      </Page>
    </>
  );
};

/**
 * Parses the post data from the files
 *
 * @returns the blog posts
 */
export async function getStaticProps() {
  /**
   * Sort posts in descending order
   * @param a the first post
   * @param b the second post
   * @returns a negitive number
   */
  const sortPostsDesc = (a: PostType, b: PostType) => {
    const aDate = new Date(a.date || '').getTime();
    const bDate = new Date(b.date || '').getTime();
    return bDate - aDate;
  };

  let collections: CollectionType[] = [];
  const files = (await readdir(path.join('content', 'adventures'))).map(
    (fileName) => readFile(path.join('content', 'adventures', fileName)),
  );

  // Get file content and parse to format
  await Promise.all(files).then((res) => {
    // Create post collection obj
    const obj = res
      .map((file) => matter(file.toString()).data)
      .reduce((col, post) => {
        post.collection.forEach((collection: string) => {
          col[collection] = col[collection]
            ? [...col[collection], post]
            : [post];
        });
        return col;
      }, {});

    // Convert obj to list of CollectionTypes
    collections = Object.keys(obj).map((key: string) => ({
      title: key,
      posts: obj[key].sort(sortPostsDesc),
    }));
  });

  return {
    props: {
      collections,
    },
  };
}

export default BlogPage;

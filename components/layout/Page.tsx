import type { NextPage } from 'next';
import Head from 'next/head';

// Styles
import styles from '../../styles/components/layout/page.module.scss';

// Components
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

// Types
import PageType from '../../types/layout/Page';

/**
 * Creates and configures a page component for the Next app.
 *
 * @param {String} title the page title
 * @param {String} description the page description
 * @param {String} previewImg the social media preview image of the page
 * @param {ReactNode} children a list of react children
 * @returns A page component
 */
const Page: NextPage<PageType> = ({
  title,
  description,
  previewImg,
  children,
}: PageType) => {
  const mainClass = 'page';
  return (
    <div
      className={styles[mainClass]}
      data-testid="page"
    >
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        {previewImg && (
          <>
            <meta
              property="og:image"
              content={previewImg}
            />
            <meta
              property="twitter:image"
              content={previewImg}
            />
          </>
        )}
      </Head>
      <Header />
      {children && (
        <main
          className={styles[`${mainClass}__body`]}
          data-testid="page-body"
        >
          {children}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default Page;

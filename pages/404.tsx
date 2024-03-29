import Page from '@/layout/Page';
import NotFound from '@/global/NotFound';
import {
  attributes as notFoundModel,
  react as NotFoundPageContent,
} from '@/content/404.md';

/**
 * Overrides the default Next 404 component
 *
 * @returns a 404 component
 */
const NotFoundPage = () => {
  return (
    <>
      <NotFoundPageContent />
      <Page
        title={notFoundModel.title}
        description={notFoundModel.description}
        previewImg={notFoundModel.previewImg}
      >
        <NotFound text={notFoundModel.notFound} />
      </Page>
    </>
  );
};

export default NotFoundPage;

// Styles
import styles from '../../styles/components/posts/grid.module.scss';

// Components
import Card from '../global/Card';

// Types
import GridType from '../../types/posts/Grid';

const Grid = ({ posts }: GridType) => (
  <div
    className={styles.grid}
    data-testid="grid"
  >
    {posts.map((post, key) => (
      <Card
        key={key}
        title={post.title}
        cardBody={post.cardBody}
        date={post.date}
        type={post.type}
        image={post.image}
      />
    ))}
  </div>
);

export default Grid;

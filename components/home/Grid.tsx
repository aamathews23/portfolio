import styles from '../../styles/components/home/grid.module.scss';
import Text from '../global/Text';
import Card from '../global/Card';
import HomeGridType from '../../types/home/Grid';
import Button from '../global/Button';

const Grid = ({ title, cta, posts }: HomeGridType) => {
  const mainClass = 'grid';
  return (
    <section
      className={styles[mainClass]}
      data-testid={mainClass}
    >
      <Text
        tag="h2"
        className={styles[`${mainClass}__title`]}
        data-testid={`${mainClass}-title`}
      >
        {title}
      </Text>
      <div
        className={styles[`${mainClass}__grid`]}
        data-testid={`${mainClass}-grid`}
      >
        {posts &&
          posts.length > 0 &&
          posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              cardBody={post.cardBody}
              date={post.date}
              type={post.type}
              image={post.image}
            />
          ))}
      </div>
      <Button
        label={cta.label}
        tag={cta.tag}
        anchor={cta.anchor}
      />
    </section>
  );
};

export default Grid;

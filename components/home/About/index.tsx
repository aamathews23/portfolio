import Image from 'next/image';
import Markdown from '../../global/Markdown';
import Text from '../../global/Text';
import SplitBlock from '../../layout/SplitBlock';
import AboutType from '../../../types/home/About';
import style from './style';

const loader = ({ src }: any) => {
  return src;
};

const About = ({ title, main, skills, image }: AboutType) => {
  return (
    <SplitBlock
      data-testid="about"
      left={
        <>
          <Text
            tag="h2"
            style={style.title}
            data-testid="about-title"
          >
            {title}
          </Text>
          <div
            css={style.body}
            data-testid="about-body"
          >
            <Markdown content={main} />
          </div>
          <div
            css={style.list}
            data-testid="about-list"
          >
            {skills.map((skill, key) => (
              <Text
                style={style.item}
                data-testid="about-item"
                key={key}
              >
                {skill}
              </Text>
            ))}
          </div>
        </>
      }
      right={
        image && (
          <div
            css={style.img}
            data-testid="about-img"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width="500"
              height="500"
              objectFit="cover"
              loader={loader}
              unoptimized
              priority
            />
          </div>
        )
      }
      isReverse
    />
  );
};

export default About;

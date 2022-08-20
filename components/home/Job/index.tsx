import Markdown from '../../global/Markdown';
import Text from '../../global/Text';
import JobType from '../../../types/home/Job';
import style from './style';

const Job = ({ title, duration, description, isActive }: JobType) => {
  return (
    <li
      css={style.job}
      data-testid="job"
    >
      <Text
        tag="h3"
        style={isActive ? style.titleActive : style.title}
        data-testid="job-title"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <Text
        style={style.duration}
        data-testid="job-duration"
      >
        {duration}
      </Text>
      <div css={style.description}>
        <Markdown content={description} />
      </div>
    </li>
  );
};

export default Job;

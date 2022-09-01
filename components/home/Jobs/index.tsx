import Job from '../Job';
import JobsType from '../../../types/home/Jobs';
import style from './style';

/**
 * Creates a jobs component to be used on the home page
 *
 * @param {Array<Job>} jobs
 * @returns a jobs component
 */
const Jobs = ({ jobs }: JobsType) => {
  return (
    <ul
      css={style}
      data-testid="jobs"
    >
      {jobs &&
        jobs.length > 0 &&
        jobs.map((job, index) => (
          <Job
            key={index}
            title={job.title}
            duration={job.duration}
            description={job.description}
            isActive={job.isActive}
          />
        ))}
    </ul>
  );
};

export default Jobs;

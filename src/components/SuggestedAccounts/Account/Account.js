import PropTypes from 'prop-types';
import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image/Image';
import Button from '~/components/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Account({ data }) {
  const navigate = useNavigate();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Link to={`/@/${data.maKhoaHoc}`}>
          <Image
            className={cx('avatar')}
            src={data.hinhAnh}
            alt={data.tenKhoaHoc}
            fallback="https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg"
          />
        </Link>
        <Button
          primary
          onClick={() => {
            navigate(`/@/${data.maKhoaHoc}`);
          }}
        >
          Follow
        </Button>
      </div>
      <Link to={`/@/${data.maKhoaHoc}`}>
        <p className={cx('username')}>
          {data.maKhoaHoc}
          {data.tick && (
            <span className={cx('check')}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
          )}
        </p>
        <p className={cx('name')}>{data.tenKhoaHoc}</p>{' '}
      </Link>
      <div className={cx('footer')}>
        <span className={cx('number')}>12000</span>
        <span className={cx('user-stats')}>Followers</span>
        <span className={cx('number')}>12000</span>
        <span className={cx('user-stats')}>Likes</span>
      </div>
    </div>
  );
}

Account.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Account;

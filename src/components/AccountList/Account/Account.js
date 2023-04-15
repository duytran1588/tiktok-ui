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
        <Link to={`/@/${data.taiKhoan}`}>
          <Image
            className={cx('avatar')}
            src={data.hinhAnh || 'https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg'}
            alt={data.hoTen}
            fallback="https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg"
          />
        </Link>
        <Button
          primary
          onClick={() => {
            navigate(`/@/${data.taiKhoan}`);
          }}
        >
          Follow
        </Button>
      </div>
      <Link to={`/@/${data.taiKhoan}`}>
        <p className={cx('username')}>
          {data.taiKhoan}
          {data.tick && (
            <span className={cx('check')}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </span>
          )}
        </p>
        <p className={cx('name')}>{data.hoTen}</p>
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

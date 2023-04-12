import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@/${data.maKhoaHoc}`} className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src={data.hinhAnh}
        alt={data.tenKhoaHoc}
        fallback="https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg"
      />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>{data.maKhoaHoc}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <p className={cx('name')}>{data.tenKhoaHoc}</p>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;

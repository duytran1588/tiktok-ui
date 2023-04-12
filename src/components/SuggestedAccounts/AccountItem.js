import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Image from '../Image/Image';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <NavLink to={`@/${data.maKhoaHoc}/live`} className={cx('account-item')}>
      <Image
        className={cx('avatar')}
        src={data.hinhAnh}
        alt={data.tenKhoaHoc}
        fallback="https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg"
      />
      <div className={cx('item-info')}>
        <h4 className={cx('nickname')}>
          <span>{data.maKhoaHoc}</span>
          {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <p className={cx('name')}>{data.tenKhoaHoc}</p>
      </div>
    </NavLink>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;

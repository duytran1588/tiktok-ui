import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AccountItem from './AccountItem';
import styles from './AccountList.module.scss';

const cx = classNames.bind(styles);

function AccountList({ accountList, label, disabled = false }) {
  const loading = useSelector((state) => state.accountList.loading);

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
      {accountList?.map((item) => (
        <AccountItem key={item.taiKhoan} data={item} disabled={disabled} />
      ))}
    </div>
  );
}

AccountList.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default AccountList;

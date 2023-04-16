import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import AccountItem from './AccountItem';
import styles from './AccountList.module.scss';
import { useState } from 'react';
import { accountList as accountListService } from '~/services/accountListService';

const cx = classNames.bind(styles);

function AccountList({ accountList, label, disabled = false }) {
  const [seeMoreList, setSeeMoreList] = useState([]);
  const [currPage, setCurrPage] = useState(2);

  const loading = useSelector((state) => state.accountList.loading);
  const pageSize = 5;

  const handleSeemore = async () => {
    const res = await accountListService('GP01', currPage, pageSize);
    setSeeMoreList((prev) => [...prev, ...res.items]);
    setCurrPage((prev) => prev + 1);
  };

  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
      {accountList?.map((item) => (
        <AccountItem key={item.taiKhoan} data={item} disabled={disabled} />
      ))}

      {seeMoreList?.map((item) => (
        <AccountItem key={item.taiKhoan} data={item} disabled={disabled} />
      ))}

      <button onClick={handleSeemore} className={cx('more-btn')}>
        See all
      </button>
    </div>
  );
}

AccountList.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default AccountList;

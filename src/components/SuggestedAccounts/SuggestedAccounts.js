import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccounts({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <AccountItem
        data={{
          maKhoaHoc: 'aJava',
          tenKhoaHoc: 'Lập trình java',
          hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-java_gp01.png',
          tick: true,
        }}
      />
      <AccountItem
        data={{
          maKhoaHoc: 'aJava',
          tenKhoaHoc: 'Lập trình java',
          hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-java_gp01.png',
        }}
      />
      <AccountItem
        data={{
          maKhoaHoc: 'aJava',
          tenKhoaHoc: 'Lập trình java',
          hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-java_gp01.png',
        }}
      />
      <AccountItem
        data={{
          maKhoaHoc: 'aJava',
          tenKhoaHoc: 'Lập trình java',
          hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-java_gp01.png',
        }}
      />

      <p className={cx('more-btn')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;

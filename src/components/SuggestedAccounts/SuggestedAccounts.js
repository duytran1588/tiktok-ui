import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const courseList = [
  {
    maKhoaHoc: 'bc38',
    tenKhoaHoc: 'Học lập trình web',
    hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/hoc-lap-trinh-web.jpg',
  },
  {
    maKhoaHoc: 'D123',
    tenKhoaHoc: 'Lap Trinh Full Stack 123',
    hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-full-stack-123.jpg',
  },
  {
    maKhoaHoc: 'ITEC 2117',
    tenKhoaHoc: 'Lập Trình C####',
    hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/lap-trinh-c-.jpg',
  },
  {
    maKhoaHoc: 'ITEC2106',
    tenKhoaHoc: 'JavaScript Cơ Bản Cho Người Mới Bắt Đầu',
    hinhAnh: 'https://elearning0706.cybersoft.edu.vn/hinhanh/javascript-co-ban-cho-nguoi-moi-bat-dau.png',
  },
];

function SuggestedAccounts({ label, disabled = false }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>

      {courseList.map((course) => (
        <AccountItem key={course.maKhoaHoc} data={course} disabled={disabled} />
      ))}

      <p className={cx('more-btn')}>See all</p>
    </div>
  );
}

SuggestedAccounts.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

export default SuggestedAccounts;

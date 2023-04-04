import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_300x300.webp?x-expires=1680764400&x-signature=J%2B0%2BWZXsrSQERGwm%2FVz2I8k4v20%3D"
        alt="Hoaa"
      />
      <div className={cx('info')}>
        <h4 className={cx('username')}>
          <span>daniele.ab</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <p className={cx('name')}>Nguyen A</p>
      </div>
    </div>
  );
}

export default AccountItem;

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './AccountList.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { Account } from './Account';
import React from 'react';

const cx = classNames.bind(styles);

function AccountItem({ data, disabled }) {
  const renderResult = (attrs) => {
    return (
      <div className={cx('account-wrapper')} tabIndex="-1" {...attrs}>
        <WrapperPopper className={cx('account-popper')}>
          <Account data={data} />
        </WrapperPopper>
      </div>
    );
  };

  let Comp = Tippy;
  let Wrapper = 'div'; //fix warning of Tippy, it need div or span tag around the reference element

  let props = {
    offset: [-20, 12],
    interactive: true,
    delay: [500, 500],
    render: renderResult,
    placement: 'bottom-start',
  };

  if (disabled) {
    Comp = React.Fragment;
    Wrapper = React.Fragment;
    props = {};
  }

  return (
    <Wrapper>
      <Comp {...props}>
        <NavLink to={`@/${data.taiKhoan}/live`} className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src={data.hinhAnh || 'https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg'}
            alt={data.hoTen}
            fallback="https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg"
          />
          <div className={cx('item-info')}>
            <h4 className={cx('nickname')}>
              <span>{data.taiKhoan}</span>
              {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
            </h4>
            <p className={cx('name')}>{data.hoTen}</p>
          </div>
        </NavLink>
      </Comp>
    </Wrapper>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;

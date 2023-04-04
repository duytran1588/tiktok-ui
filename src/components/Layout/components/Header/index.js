import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import images from '~/assets/images';
import { default as AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './Header.module.scss';

const cs = classNames.bind(styles);

function Header() {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchList([1, 2, 3]);
    }, 1000);
  }, []);

  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <Tippy
          visible={searchList.length ? true : false}
          interactive
          render={(attrs) => (
            <div className={cs('search-result')} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className={cs('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cs('search')}>
            <input placeholder="search accounts and videos" />
            <button className={cs('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cs('loading')} icon={faSpinner} />
            {/* loading */}
            <Tippy content="search">
              <button className={cs('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Tippy>
          </div>
        </Tippy>
        <div className={cs('actions')}>
          <Button text onClick={() => console.log('test')}>
            Upload
          </Button>
          <Button primary onClick={() => console.log('test')}>
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;

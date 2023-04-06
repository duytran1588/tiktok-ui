import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';

import 'tippy.js/dist/tippy.css';
import { default as AccountItem } from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 1000);
  }, []);

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length ? true : false}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <h4 className={cx('search-title')}>Accounts</h4>
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
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="search accounts and videos"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />

        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

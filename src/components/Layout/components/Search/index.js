import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import * as searchSevice from '~/apiServices/searchService';
import { default as AccountItem } from '~/components/AccountItem';
import { Loading, SearchIcon } from '~/components/Icons';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { useDebounce } from '~/hooks';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      console.log(debounced)
      const result = await searchSevice.search(debounced, 'GP01');
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return (
    <HeadlessTippy
      visible={showResult && searchResult.length > 0}
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <WrapperPopper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((item) => (
              <AccountItem key={item.maKhoaHoc} data={item} />
            ))}
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

        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}

        {loading && <Loading className={cx('loading')} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;

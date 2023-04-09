import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import 'tippy.js/dist/tippy.css';

import { default as AccountItem } from '~/components/AccountItem';
import { Loading, SearchIcon } from '~/components/Icons';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as request from '~/utils/request';
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
    setLoading(true);

    const fetchApi = async () => {
      try {
        const res = await request.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc', {
          params: {
            tenKhoaHoc: debounced,
            MaNhom: 'GP01',
          },
        });
        setSearchResult(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
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

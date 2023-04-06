import { faCircleXmark, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import { default as AccountItem } from '~/components/AccountItem';
import Button from '~/components/Button';
import {
  CoinIcon,
  GearIcon,
  InboxIcon,
  KeyboardIcon,
  LanguageIcon,
  LogoutIcon,
  MessageIcon,
  ModeIcon,
  QuestionIcon,
  SearchIcon,
  UploadIcon,
  UserIcon,
} from '~/components/Icons';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        { type: 'language', code: 'vi', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    icon: <QuestionIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },

  {
    icon: <KeyboardIcon />,
    title: 'Keyboard shortcuts',
    to: '/short-cut',
  },
  {
    icon: <ModeIcon />,
    title: 'Dark Mode',
  },
];

function Header() {
  const [searchList, setSearchList] = useState([]);

  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchList([1, 2, 3]);
    }, 1000);
  }, []);

  const handleMenuChange = (item) => {
    switch (item.type) {
      case 'language':
        console.log('helloe');
        break;
      default:
    }
    console.log(item);
  };

  const userMenu = [
    {
      icon: <UserIcon />,
      title: 'View Profile',
      to: '/@Hoa',
    },
    {
      icon: <CoinIcon />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <GearIcon />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <HeadlessTippy
          visible={searchList.length ? true : false}
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
        >
          <div className={cx('search')}>
            <input placeholder="search accounts and videos" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                  <span className={cx('badge')}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text onClick={() => console.log('test')}>
                Upload
              </Button>
              <Button primary onClick={() => console.log('test')}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_300x300.webp?x-expires=1680764400&x-signature=J%2B0%2BWZXsrSQERGwm%2FVz2I8k4v20%3D"
                alt="user"
                // Truyền link default nếu link chính bị lỗi
                fallback="https://bedental.vn/wp-content/uploads/2022/11/hot-girl.jpg"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;

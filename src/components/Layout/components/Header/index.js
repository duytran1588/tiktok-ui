import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';

const cs = classNames.bind(styles);

function Header() {
  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <img src={images.logo} alt="Tiktok" />
        <div className={cs('search')}>
          <input placeholder="search accounts and videos" />
          <button className={cs('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          <FontAwesomeIcon className={cs('loading')} icon={faSpinner} />
          {/* loading */}
          <button className={cs('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cs('actions')}></div>
      </div>
    </header>
  );
}

export default Header;

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
  /**
   * react-router-dom v6 cho phép truyền class dưới dạng callback, với tham số truyền vào có key là isActive
   * Dùng cách để add class active vào module.scss
   */
  return (
    <NavLink
      to={to}
      className={(nav) =>
        cx('menu-item', {
          active: nav.isActive,
        })
      }
    >
      <span className={cx('icon')}>{icon}</span>
      <span className={cx('active-icon')}>{activeIcon}</span>
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  activeIcon: PropTypes.node.isRequired,
};
export default MenuItem;

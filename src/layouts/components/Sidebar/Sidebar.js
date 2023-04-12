import classNames from 'classnames/bind';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu className={cx('menu')}>
        <MenuItem to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} title="For You" />
        <MenuItem
          to={config.routes.following}
          icon={<UserGroupIcon />}
          activeIcon={<UserGroupActiveIcon />}
          title="Following"
        />
        <MenuItem to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} title="LIVE" />
      </Menu>

      <SuggestedAccounts label="Suggested Accounts" />
      <SuggestedAccounts label="Following Accounts" />
    </aside>
  );
}

export default Sidebar;

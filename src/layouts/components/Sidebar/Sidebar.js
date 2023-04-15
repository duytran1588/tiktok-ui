import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomeActiveIcon,
  HomeIcon,
  LiveActiveIcon,
  LiveIcon,
  UserGroupActiveIcon,
  UserGroupIcon,
} from '~/components/Icons';
import AccountList from '~/components/AccountList/AccountList';
import { fetchAccountList, fetchFollowingAccountList } from '~/components/AccountList/accountSlice';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
  const dispatch = useDispatch();

  const suggestedAccountList = useSelector((state) => state.accountList.suggestedAccountList);
  const followingAccountList = useSelector((state) => state.accountList.followingAccountList);

  useEffect(() => {
    dispatch(fetchAccountList({ MaNhom: 'GP01', page: 1, pageSize: 5 }));
    dispatch(fetchFollowingAccountList({ MaNhom: 'GP02', page: 1, pageSize: 5 }));
  }, [dispatch]);

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

      <AccountList label="Suggested Accounts" accountList={suggestedAccountList} />
      <AccountList label="Following Accounts" accountList={followingAccountList} disabled />
    </aside>
  );
}

export default Sidebar;

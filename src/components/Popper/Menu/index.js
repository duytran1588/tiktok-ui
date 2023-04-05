import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ items = [], children }) {
  const menusRender = () => {
    return items.map((item, index) => <MenuItem key={index} data={item} />);
  };

  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('menu-popper')}>{menusRender()}</WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

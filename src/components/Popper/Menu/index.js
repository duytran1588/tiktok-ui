import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Menu({ items = [], children, onChange = () => {} }) {
  const [history, setHistory] = useState([{ data: items }]);

  const current = history[history.length - 1];

  const menusRender = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 700]}
      offset={[10, 8]}
      placement="bottom-end"
      interactive
      render={(attrs) => {
        return (
          <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <WrapperPopper className={cx('menu-popper')}>
              {history.length > 1 && (
                <Header
                  title={current.title}
                  onBack={() => {
                    setHistory((prev) => prev.slice(0, history.length - 1));
                  }}
                />
              )}
              {menusRender()}
            </WrapperPopper>
          </div>
        );
      }}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;

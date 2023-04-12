import Tippy from '@tippyjs/react/headless';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ items = [], hideOnClick = false, children, onChange = defaultFn }) {
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

  const handleBack = () => {
    setHistory((prev) => prev.slice(0, history.length - 1));
  };

  const renderResult = (attrs) => {
    return (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
        <WrapperPopper className={cx('menu-popper')}>
          {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
          <div className={cx('menu-body')}>{menusRender()}</div>
        </WrapperPopper>
      </div>
    );
  };

  //Reset to first level of menu
  const handleReset = () => {
    setHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 700]}
      offset={[10, 8]}
      placement="bottom-end"
      interactive
      render={renderResult}
      hideOnClick={hideOnClick}
      onHide={handleReset}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
};
export default Menu;

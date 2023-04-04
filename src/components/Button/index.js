import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
  text = false,
  primary = false,
  outline = false,
  disabled = false,
  rounded = false,
  small = false,
  large = false,
  href,
  to,
  children,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  /**
   * TH người dùng biết CSS, sẽ vào inspect, click bỏ pointer-events: none của button, do đó button vẫn click được
   * Để người dùng ko click được button khi nó disabled, ta xoá bỏ onClick của props luôn
   */
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (href) {
    Comp = 'a';
    props.href = href;
  } else if (to) {
    Comp = Link;
    props.to = to;
  }

  const classes = cx('wrapper', {
    /**     
     * Áp dụng khi muốn custom class từ comp Header:
     * VD: Bên Header ta truyền như vầy
     * <Button  className={cs('custom')} onClick={() => console.log('test')}>
          Log in
       </Button>
       
       set lại bên Button
       [className]: className để trong ngoặc thì là biến chứ ko phải là key tự tạo
     * Nếu className: true thì giá trị của [className] sẽ được lấy làm class
     * VD: className = {cx('custom')} => cx('custom') sẽ được lấy làm class
     * 
     */
    primary: primary, //primary (từ props): true thì key primary (tự tạo) sẽ được dùng làm class của element
    outline,
    disabled,
    rounded,
    small,
    large,
    text,
  });

  return (
    <Comp className={classes} {...props}>
      <span className={cx('title')}>{children}</span>
    </Comp>
  );
}

export default Button;

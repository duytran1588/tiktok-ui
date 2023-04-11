/**
 * Vì Tippy chỉ nhận React Element làm children, nên nếu dùng Image component thì phải truyền ref từ con của nó ra bên ngoài cho Tippy biết để định hình các popper layout
 */
import PropTypes from 'prop-types';
import styles from './Image.module.scss';
import classNames from 'classnames';
import { forwardRef, useState } from 'react';
import images from '~/assets/images/';

const Image = forwardRef(({ fallback: customFallback = images.noImage, alt, className, src, ...props }, ref) => {
  const classes = classNames(className, styles.wrapper);
  const [fallback, setFallback] = useState('');
  const handleError = () => {
    /**
     * Nếu link chính bị hỏng thì xử lý như sau:
     * - Nếu user ko truyền vào link ảnh dự phòng thì lấy ảnh noImage trưng ra
     * - Nếu user có truyền link dự phòng thì show link này
     */
    setFallback(customFallback);
  };

  return <img alt={alt} className={classes} ref={ref} src={fallback || src} {...props} onError={handleError} />;
});

Image.propTypes = {
  fallback: PropTypes.string,
  alt: PropTypes.string,
  class: PropTypes.string,
  src: PropTypes.string,
};
export default Image;

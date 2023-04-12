import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';

const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cs('wrapper')}>
      <Header />

      <div className={cs('container')}>
        <Sidebar />
        <div className={cs('content')}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default DefaultLayout;

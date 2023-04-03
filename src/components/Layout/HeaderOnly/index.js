import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <dv className="container">
        <div className="content">{children}</div>
      </dv>
    </div>
  );
}

export default HeaderOnly;

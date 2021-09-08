import { Nav } from '../../components';

export const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

import { HeaderOnly } from '~/components/Layout';
//pages
import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';

//Những router ko cần đăng nhập vẫn vào được
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/@/:id',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
];

//Những router phải đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };

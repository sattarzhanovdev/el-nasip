import { Pages } from '../pages';

export const PUBLIC_ROUTES = [
  {
    id:1,
    route: '/',
    page: <Pages.Main />,
  },
  {
    id:2,
    route: '/floors/',
    page: <Pages.Floors />,
  },
  {
    id:3,
    route: '/apartments/',
    page: <Pages.Apartments />
  },
  {
    id:4,
    route: '/apartments/:id',
    page: <Pages.Photo />
  }
]
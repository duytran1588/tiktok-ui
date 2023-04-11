import * as request from '~/utils/request';

export const search = async (tenKhoaHoc, maNhom = 'GP01') => {
  const res = await request.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc', {
    params: {
      tenKhoaHoc,
      maNhom,
    },
  });
  return res.data;
};

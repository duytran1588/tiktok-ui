import * as httpRequest from '~/utils/httpRequest';

export const search = async (tenKhoaHoc, maNhom = 'GP01') => {
  const res = await httpRequest.get('QuanLyKhoaHoc/LayDanhSachKhoaHoc', {
    params: {
      tenKhoaHoc,
      maNhom,
    },
  });
  return res.data;
};

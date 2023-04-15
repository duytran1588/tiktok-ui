import * as HttpRequest from '~/utils/httpRequest';

export const accountList = async (MaNhom, page, pageSize) => {
  const res = await HttpRequest.get('QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang', {
    params: {
      MaNhom,
      page,
      pageSize,
    },
  });
  return res.data;
};

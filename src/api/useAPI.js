import axiosClient from './axiosClient'

export const userAPI = {
  // Todo ------------ GET ------------
  getListTypeUser: function () {
    const url = 'QuanLyNguoiDung/LayDanhSachLoaiNguoiDung'
    return axiosClient.get(url)
  },

  getListAllUser(params) {
    const url = 'QuanLyNguoiDung/LayDanhSachNguoiDung'
    return axiosClient.get(url, { params })
  },
  // MaNhom - tuKhoa

  getListUserByPagination(params) {
    const url = 'QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang'
    return axiosClient.get(url, { params })
  },
  // MaNhom - tuKhoa - soTrang - soPhanTuTrenTrang

  searchUser(params) {
    const url = 'QuanLyNguoiDung/TimKiemNguoiDung'
    return axiosClient.get(url, { params })
  },
  // MaNhom - tuKhoa

  searchUserByPagination(params) {
    const url = 'QuanLyNguoiDung/TimKiemNguoiDungPhanTrang'
    return axiosClient.get(url, { params })
  },
  // nd:
  // taiKhoan - matKhau - email - soDt - maNhom - maLoaiNguoiDung - hoTen

  // Todo ------------ POST ------------
  signIn(data) {
    const url = 'QuanLyNguoiDung/DangNhap'
    return axiosClient.post(url, data)
  },
  // ndDN: taiKhoan - matKhau

  signUp(data) {
    const url = 'QuanLyNguoiDung/DangKy'
    return axiosClient.post(url, data)
  },
  // nd: taiKhoan - matKhau - email - soDt - maNhom - hoTen

  infoAccount() {
    const url = 'QuanLyNguoiDung/ThongTinTaiKhoan'
    return axiosClient.post(url)
  },

  addUser() {
    const url = 'QuanLyNguoiDung/ThemNguoiDung'
    return axiosClient.post(url)
  },
  // nd: taiKhoan - matKhau - email - soDt - maNhom - maLoaiNguoiDung - hoTen

  // Todo ------------ PUT ------------
  updateInfoUser(data) {
    const url = 'QuanLyNguoiDung/CapNhatThongTinNguoiDung'
    return axiosClient.put(url, data)
  },
  // nd: taiKhoan - matKhau - email - soDt - maNhom - maLoaiNguoiDung - hoTen

  // Todo ------------ DELETE ------------
  deleteUser(params) {
    const url = 'QuanLyNguoiDung/XoaNguoiDung'
    return axiosClient.delete(url, { params })
  }
  // TaiKhoan
}

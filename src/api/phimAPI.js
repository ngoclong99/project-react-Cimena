import { GROUP_ID } from '../util/setting/config'
import axiosClient from './axiosClient'

export const phimAPI = {
  // Todo ------------ GET ------------
  getListBanner() {
    const url = 'QuanLyPhim/LayDanhSachBanner'
    return axiosClient.get(url)
  },

  getListMovie(params) {
    const url = `QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`
    return axiosClient.get(url, { params })
  },
  // maNhom (string) - tenPhim (string)

  getListMoviePagination(params) {
    const url = 'QuanLyPhim/LayDanhSachPhimPhanTrang'
    return axiosClient.get(url, { params })
  },
  // maNhom (string) - tenPhim(string) - soTrang(int32) - soPhanTuTrenTrang(int32)

  getListMovieByDay(params) {
    const url = `QuanLyPhim/LayDanhSachPhimTheoNgay`
    return axiosClient.get(url, { params })
  },
  // maNhom (string) - tenPhim(string) - soTrang(int32) - soPhanTuTrenTrang(int32) - tuNgay(strubg) - denNgay(string)

  getInfoMovie(id) {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
    return axiosClient.get(url)
  },
  // MaPhim(int32)

  // Todo ------------ POST ------------
  addMovie(data) {
    const url = 'QuanLyPhim/ThemPhim'
    return axiosClient.post(url, data)
  },
  // model:
  // maPhim(int) - tenPhim - biDanh - trailer - hinhAnh - moTa - maNhom - ngayKhoiChieu - danhGia(int)

  addMovieUploadImg(data) {
    const url = 'QuanLyPhim/ThemPhimUploadHinh'
    return axiosClient.post(url, data)
  },
  // frm(array)

  updateMovieUpload(data) {
    const url = 'QuanLyPhim/CapNhatPhimUpload'
    return axiosClient.post(url, data)
  },
  // frm(array)

  updateImgMovie(data) {
    const url = 'QuanLyPhim/UploadHinhAnhPhim'
    return axiosClient.post(url, data)
  },

  updateMovie(data) {
    const url = 'QuanLyPhim/CapNhatPhim'
    return axiosClient.post(url, data)
  },
  // model:
  // maPhim - danhGia (int) - tenPhim - biDanh - trailer - hinhAnh - moTa - maNhom - ngayKhoiChieu

  managerMovie(data) {
    const url = 'QuanLyPhim'
    return axiosClient.post(url, data)
  },
  // maNhom (string) - tenPhim(string) - file(formData)

  // Todo ------------ DELETE ------------
  deletePhim(params) {
    const url = 'QuanLyPhim/XoaPhim'
    return axiosClient.delete(url, { params })
  }
  // MaPhim
}

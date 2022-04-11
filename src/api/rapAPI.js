import { GROUP_ID } from '../util/setting/config'
import axiosClient from './axiosClient'

export const rapAPI = {
  getInfoRap(params) {
    const url = 'QuanLyRap/LayThongTinHeThongRap'
    return axiosClient.get(url, { params })
  },
  // maHeThongRap

  getInfoCumRap(params) {
    const url = 'QuanLyRap/LayThongTinCumRapTheoHeThong'
    return axiosClient.get(url, { params })
  },
  // maHeThongRap

  getInfoPhimByRap(params) {
    const url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`
    return axiosClient.get(url, { params })
  },
  // maHeThongRap ---- maNhom

  getInfoLichChieuPhim(id) {
    const url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    return axiosClient.get(url)
  }
}

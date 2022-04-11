import axiosClient from './axiosClient'

export const datveAPI = {
  booksTicket(data) {
    const url = 'QuanLyDatVe/DatVe'
    return axiosClient.post(url, data)
  },
  // DanhSachVe :
  // {
  //   "maLichChieu": 0,
  //   "danhSachVe": [
  //     {
  //       "maGhe": 0,
  //       "giaVe": 0
  //     }
  //   ]
  // }
  getListTicket(id) {
    const url = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    return axiosClient.get(url)
  },
  // MaLichChi

  addSchedule(data) {
    const url = 'QuanLyDatVe/TaoLichChieu'
    return axiosClient.post(url, data)
  }
  // lich:
  // {
  //   "maPhim": 0,
  //   "ngayChieuGioChieu": "string",
  //   "maRap": "string",
  //   "giaVe": 0
  // }
}

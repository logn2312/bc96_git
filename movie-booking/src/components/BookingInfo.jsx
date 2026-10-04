import { useBookingStore } from "../store/useBookingStore"

const formatTien = (so) => so.toLocaleString('vi-VN')

export default function BookingInfo({ danhSachGheDangDat }) {
  const tongTien = danhSachGheDangDat.reduce((tong, ghe) => tong + ghe.gia, 0)
  const huyGhe = useBookingStore((s) => s.huyGhe)
  
  return (
    <>
      <h2 className="booking__info-title">Danh sách ghế bạn chọn</h2>

      <ul className="legend">
        <li>
          <span className="gheDuocChon legend__box" /> Ghế đã đặt
        </li>
        <li>
          <span className="gheDangChon legend__box" /> Ghế đang chọn
        </li>
        <li>
          <span className="ghe legend__box legend__box--empty" /> Ghế chưa đặt
        </li>
      </ul>

      <table className="ticket-table">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Huỷ</th>
          </tr>
        </thead>
        <tbody>
          {danhSachGheDangDat.map((ghe) => (
            <tr key={ghe.soGhe}>
              <td>{ghe.soGhe}</td>
              <td>{formatTien(ghe.gia)}</td>
              <td>
                <button type="button" onClick={() => huyGhe(ghe.soGhe)} className="ticket-table__remove" aria-label={`Huỷ ghế ${ghe.soGhe}`}>
                  ✕
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Tổng tiền</td>
            <td>{formatTien(tongTien)}</td>
            <td />
          </tr>
        </tfoot>
      </table>
    </>
  )
}

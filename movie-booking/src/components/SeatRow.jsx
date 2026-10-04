import { useBookingStore } from "../store/useBookingStore"

export default function SeatRow({ hangGhe, isHeader, danhSachGheDangDat }) {
  const datGhe = useBookingStore((s) => s.datGhe)
  
  // Hàng đầu tiên chỉ hiển thị số cột 1 - 12
  if (isHeader) {
    return (
      <div className="seat-row">
        <span className="firstChar">{hangGhe.hang}</span>
        {hangGhe.danhSachGhe.map((ghe) => (
          <span key={ghe.soGhe} className="rowNumber">
            {ghe.soGhe}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className="seat-row">
      <span className="firstChar">{hangGhe.hang}</span>
      {hangGhe.danhSachGhe.map((ghe, index) => {
        const dangChon = danhSachGheDangDat.some((g) => g.soGhe === ghe.soGhe)

        let className = 'ghe'
        if (ghe.daDat) className += ' gheDuocChon'
        else if (dangChon) className += ' gheDangChon'

        return (
          <button
            key={ghe.soGhe}
            type="button"
            className={className}
            disabled={ghe.daDat}
            title={ghe.soGhe}
            onClick={() => datGhe(ghe)}
          >
            {index + 1}
          </button>
        )
      })}
    </div>
  )
}

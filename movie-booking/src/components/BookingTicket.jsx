import danhSachGhe from "../data/danhSachGhe.json";
import SeatRow from "./SeatRow";
import BookingInfo from "./BookingInfo";
import "../assets/BaiTapBookingTicket.css";
import "./BookingTicket.css";
import { useBookingStore } from "../store/useBookingStore";

// TODO: tạm thời fix cứng để xem giao diện, sau này lấy từ Redux store

export default function BookingTicket() {
  const danhSachGheDangDat = useBookingStore((s) => s.danhSachGheDangDat);
  return (
    <div className="bookingMovie booking">
      <div className="booking__overlay">
        <div className="booking__container">
          <section>
            <h1 className="booking__title">Đặt vé xem phim CyberLearn.vn</h1>
            <p className="booking__screen-label">Màn hình</p>
            <div className="screen" />

            <div className="seat-map">
              {danhSachGhe.map((hangGhe, index) => (
                <SeatRow
                  key={hangGhe.hang || "header"}
                  hangGhe={hangGhe}
                  isHeader={index === 0}
                  danhSachGheDangDat={danhSachGheDangDat}
                />
              ))}
            </div>
          </section>

          <aside>
            <BookingInfo danhSachGheDangDat={danhSachGheDangDat} />
          </aside>
        </div>
      </div>
    </div>
  );
}

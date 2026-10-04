import { create } from 'zustand'

export const useBookingStore = create((set) => ({
    danhSachGheDangDat: [],
    datGhe: (ghe) => {
        set((state) => {
            const gheDaChon = state.danhSachGheDangDat.some((g) => g.soGhe === ghe.soGhe);
            return {
                danhSachGheDangDat: gheDaChon
                ? state.danhSachGheDangDat.filter((g) => g.soGhe !== ghe.soGhe)
                : [...state.danhSachGheDangDat, ghe]
            }
        })
    },
    huyGhe: (soGhe) => {
        set((state) => {
            return {
                danhSachGheDangDat: state.danhSachGheDangDat.filter(g => g.soGhe !== soGhe)
            }
        })
    }
}))

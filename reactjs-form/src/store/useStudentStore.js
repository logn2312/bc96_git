import { create } from 'zustand'

export const useStudentStore = create((set) => ({
    students: [
        { id: 'SV001', name: 'Nguyễn Văn An', phone: '0901234567', email: 'an.nguyen@gmail.com' },
        { id: 'SV002', name: 'Trần Thị Bình', phone: '0912345678', email: 'binh.tran@gmail.com' },
    ],
    editStudent: null,
    keyword: '',

    addStudent: (sv) => {
        set((state) => {
            return {
                students: [...state.students, sv]
            }
        })
    },
    deleteStudent: (id) => {
        set((state) => {
            return {
                students: state.students.filter((sv) => sv.id !== id),
                // Nếu xoá đúng sinh viên đang sửa thì thoát chế độ sửa
                editStudent: state.editStudent?.id === id ? null : state.editStudent
            }
        })
    },
    selectEditStudent: (sv) => {
        set(() => {
            return { editStudent: sv }
        })
    },
    updateStudent: (sv) => {
        set((state) => {
            return {
                students: state.students.map((item) => item.id === sv.id ? sv : item),
                editStudent: null
            }
        })
    },
    setKeyword: (text) => {
        set(() => {
            return { keyword: text }
        })
    }
}))

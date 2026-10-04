import { useStudentStore } from '../store/useStudentStore'
import StudentForm from './StudentForm'

// Component hàm làm cầu nối: lấy dữ liệu từ store rồi truyền xuống class component qua props
export default function StudentFormContainer() {
    const editStudent = useStudentStore((state) => state.editStudent)
    const students = useStudentStore((state) => state.students)
    const addStudent = useStudentStore((state) => state.addStudent)
    const updateStudent = useStudentStore((state) => state.updateStudent)
    const selectEditStudent = useStudentStore((state) => state.selectEditStudent)

    return (
        <StudentForm
            editStudent={editStudent}
            students={students}
            addStudent={addStudent}
            updateStudent={updateStudent}
            cancelEdit={() => selectEditStudent(null)}
        />
    )
}

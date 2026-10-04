import { useStudentStore } from '../store/useStudentStore'

export default function StudentTable() {
    const students = useStudentStore((state) => state.students)
    const keyword = useStudentStore((state) => state.keyword)
    const setKeyword = useStudentStore((state) => state.setKeyword)
    const deleteStudent = useStudentStore((state) => state.deleteStudent)
    const selectEditStudent = useStudentStore((state) => state.selectEditStudent)

    // Lọc lúc render, không sửa mảng gốc trong store
    const filteredStudents = students.filter((sv) =>
        sv.name.toLowerCase().includes(keyword.trim().toLowerCase())
    )

    return (
        <div>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Tìm kiếm theo họ tên..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <table className="table table-bordered table-hover align-middle">
                <thead className="table-dark">
                    <tr>
                        <th>Mã SV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th className="text-center">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.length === 0 ? (
                        <tr>
                            <td colSpan={5} className="text-center text-muted">Không có sinh viên nào</td>
                        </tr>
                    ) : (
                        filteredStudents.map((sv) => (
                            <tr key={sv.id}>
                                <td>{sv.id}</td>
                                <td>{sv.name}</td>
                                <td>{sv.phone}</td>
                                <td>{sv.email}</td>
                                <td className="text-center">
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => selectEditStudent(sv)}>Sửa</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteStudent(sv.id)}>Xoá</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

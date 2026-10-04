import { Component } from 'react'

const EMPTY_VALUES = { id: '', name: '', phone: '', email: '' }
const EMPTY_ERRORS = { id: '', name: '', phone: '', email: '' }

const FIELDS = [
    { name: 'id', label: 'Mã SV', type: 'text' },
    { name: 'name', label: 'Họ tên', type: 'text' },
    { name: 'phone', label: 'Số điện thoại', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
]

const NAME_REGEX = /^[\p{L}\s]+$/u // chữ cái (kể cả có dấu tiếng Việt) và khoảng trắng
const PHONE_REGEX = /^\d+$/
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default class StudentForm extends Component {
    state = {
        values: { ...EMPTY_VALUES },
        errors: { ...EMPTY_ERRORS },
    }

    componentDidUpdate(prevProps) {
        if (this.props.editStudent !== prevProps.editStudent) {
            // Bấm "Sửa" thì đổ dữ liệu vào form, thoát chế độ sửa thì reset form
            this.setState({
                values: this.props.editStudent ? { ...this.props.editStudent } : { ...EMPTY_VALUES },
                errors: { ...EMPTY_ERRORS },
            })
        }
    }

    validate = (values) => {
        const { editStudent, students } = this.props
        const errors = { ...EMPTY_ERRORS }

        FIELDS.forEach(({ name, label }) => {
            if (!values[name].trim()) {
                errors[name] = `${label} không được để trống`
            }
        })

        // Chỉ kiểm tra trùng mã khi thêm mới
        if (!errors.id && !editStudent && students.some((sv) => sv.id === values.id.trim())) {
            errors.id = 'Mã SV đã tồn tại'
        }
        if (!errors.name && !NAME_REGEX.test(values.name.trim())) {
            errors.name = 'Họ tên chỉ được chứa chữ'
        }
        if (!errors.phone && !PHONE_REGEX.test(values.phone.trim())) {
            errors.phone = 'Số điện thoại chỉ được chứa số'
        }
        if (!errors.email && !EMAIL_REGEX.test(values.email.trim())) {
            errors.email = 'Email không đúng định dạng'
        }

        return errors
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState((prevState) => {
            return {
                values: { ...prevState.values, [name]: value },
                errors: { ...prevState.errors, [name]: '' },
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { values } = this.state
        const errors = this.validate(values)
        const hasError = Object.values(errors).some((msg) => msg !== '')

        if (hasError) {
            this.setState({ errors })
            return
        }

        const sv = {
            id: values.id.trim(),
            name: values.name.trim(),
            phone: values.phone.trim(),
            email: values.email.trim(),
        }

        if (this.props.editStudent) {
            // updateStudent đưa editStudent về null -> componentDidUpdate sẽ reset form
            this.props.updateStudent(sv)
        } else {
            this.props.addStudent(sv)
            this.setState({ values: { ...EMPTY_VALUES }, errors: { ...EMPTY_ERRORS } })
        }
    }

    render() {
        const { values, errors } = this.state
        const isEditing = this.props.editStudent !== null

        return (
            <div className="card mb-4">
                <div className="card-header bg-dark text-white">
                    <h4 className="mb-0">Thông tin sinh viên</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="row">
                            {FIELDS.map((field) => (
                                <div className="col-md-6 mb-3" key={field.name}>
                                    <label htmlFor={field.name} className="form-label">{field.label}</label>
                                    <input
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        className={`form-control ${errors[field.name] ? 'is-invalid' : ''}`}
                                        value={values[field.name]}
                                        onChange={this.handleChange}
                                        disabled={field.name === 'id' && isEditing}
                                    />
                                    {errors[field.name] && (
                                        <div className="text-danger small mt-1">{errors[field.name]}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {isEditing ? (
                            <>
                                <button type="submit" className="btn btn-primary me-2">Cập nhật</button>
                                <button type="button" className="btn btn-secondary" onClick={this.props.cancelEdit}>Huỷ</button>
                            </>
                        ) : (
                            <button type="submit" className="btn btn-success">Thêm sinh viên</button>
                        )}
                    </form>
                </div>
            </div>
        )
    }
}

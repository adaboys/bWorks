import commonFields from '../commomFields';
export default {
  name: 'Nhân viên |||| Nhân viên',
  fields: {
    username: 'Nick name',
    password: 'Mật khẩu',
    confirmPassword: 'Xác nhận mật khẩu',
    address: 'Địa chỉ',
    mobile: 'Số điện thoại',
    email: 'Email',
    fullName: 'Họ và tên',
    ...commonFields,
  },
};

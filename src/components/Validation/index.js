import * as yup from 'yup';

export const validation = () => {
  return yup.object({
    name: yup.string()
      .trim()
      .required('required')
      .min(15, 'name must contain atleast 15 characters'),
    email: yup.string().email('enter valid email address')
      .required('required'),
    phoneNumber: yup.string()
      .required('required')
      .matches(/^[6-9]\d{9}$/, 'only indian mobile number is valid'),
    password: yup.string()
      .trim()
      .required('required')
      .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      'Password must contain 8 characters, including  atleast one lower & upper case character, one number and one special character'),
    confirmPassword: yup.string()
      .required('required')
      .oneOf([yup.ref('password'), null], 'Please type the same password again!'),
    file: yup.mixed()
      .nullable()
      .required('required')
      .test('fileSize', 'file size must be less than 2 MB', (file) => file && file.size <= 200000)
      .test('fileFormat', 'only jpg, png and jpeg formats are supported', 
        (file) => file && ["image/jpg", "image/png", "image/jpeg"].includes(file.type)
      )
  })
} 
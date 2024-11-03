const yup = require("yup");

const registerValidator = yup.object({
  fullname: yup
    .string()
    .min(5, "حداقل طول نام کامل 50 حرف است.")
    .max(50, "حداکثر طول نام کامل 50 حرف است.")
    .required("نام کامل اجباری است."),
  username: yup
    .string()
    .min(5, "حداقل طول نام کاربری 50 حرف است.")
    .max(50, "حداکثر طول نام کاربری 50 حرف است.")
    .required("نام کاربری اجباری است."),
  email: yup.string().email("ایمیل معتبر نیست.").required("ایمیل اجباری است."),
  password: yup
    .string()
    .min(5, "حداقل طول رمز عبور 100 حرف است.")
    .max(50, "حداکثر طول رمز عبور 8 حرف است.")
    .required("رمز عبور اجباری است."),
  phone: yup
    .string()
    .matches(
      /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
      "شماره تلفن وارد شده معتبر نیست."
    )
    .required("رمز عبور اجباری است."),
});

module.exports = { registerValidator };

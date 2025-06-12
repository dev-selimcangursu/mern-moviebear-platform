import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerNewUser } from "../../../redux/slices/AuthSlice";
import PrimaryInput from "../../../components/UI/PrimaryInput/PrimaryInput";
import PrimaryButton from "../../../components/UI/PrimaryButton/PrimaryButton";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">MovieBear Kayıt Ol</h3>
        <small className="login-desc">Sinemanın Dijital Haliyle Tanış!</small>

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = "İsim zorunlu";
            if (!values.email) {
              errors.email = "Email zorunlu";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Geçersiz email adresi";
            }
            if (!values.password) errors.password = "Şifre zorunlu";
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await dispatch(registerNewUser(values)).unwrap();
              Swal.fire({
                icon: "success",
                title: "Kayıt Başarılı",
                text: "Kullanıcı başarıyla kaydedildi.",
                confirmButtonText: "Giriş sayfasına git",
              }).then(() => {
                navigate("/giris-yap");
              });
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Hata Oluştu",
                text: "Bir hata oluştu. Lütfen tekrar deneyin.",
              });
              console.log(error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <PrimaryInput
                type="text"
                name="name"
                placeholder="İsim Soyisim"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && (
                <div className="error-message">{errors.name}</div>
              )}

              <PrimaryInput
                type="email"
                name="email"
                placeholder="E-posta adresi"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className="error-message">{errors.email}</div>
              )}

              <PrimaryInput
                type="password"
                name="password"
                placeholder="Şifre"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className="error-message">{errors.password}</div>
              )}

              <PrimaryButton type="submit" disabled={isSubmitting}>
                Kayıt Ol
              </PrimaryButton>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;

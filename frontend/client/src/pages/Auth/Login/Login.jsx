import React from "react";
import PrimaryButton from "../../../components/UI/PrimaryButton/PrimaryButton";
import "./login.css";
import { Formik } from "formik";
import PrimaryInput from "../../../components/UI/PrimaryInput/PrimaryInput";
import { useDispatch } from "react-redux";
import { isLoginCheck } from "../../../redux/slices/AuthSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">MovieBear Giriş Yap</h3>
        <small className="login-desc">Sinemanın Dijital Haliyle Tanış !</small>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Email zorunlu";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Geçersiz email adresi";
            }

            if (!values.password) {
              errors.password = "Şifre zorunlu";
            }

            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await dispatch(isLoginCheck(values)).unwrap();

              // JWT token varsa sakla
              if (response.token) {
                localStorage.setItem("token", response.token);
                localStorage.setItem("user", JSON.stringify(response.user));

                // Giriş başarılı
                Swal.fire({
                  icon: "success",
                  title: "Giriş Başarılı",
                  text: "Yönlendiriliyorsunuz...",
                  confirmButtonText: "Devam Et",
                }).then(() => {
                  navigate("/diziler");
                });
              } else {
                throw new Error("Giriş başarısız");
              }
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Giriş Başarısız",
                text:
                  error?.message ||
                  "E-posta veya şifre hatalı. Lütfen tekrar deneyin.",
              });
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
                Giriş Yap
              </PrimaryButton>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;

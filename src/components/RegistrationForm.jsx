import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Занадто коротке ім\'я!')
    .max(50, 'Занадто довге ім\'я!')
    .required('Будь ласка, введіть ім\'я'),
  email: Yup.string().email('Невірний формат email').required('Будь ласка, введіть email'),
  password: Yup.string()
    .min(6, 'Пароль повинен бути не менше 6 символів')
    .required('Будь ласка, введіть пароль'),
});

const RegistrationForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        const resultAction = await dispatch(register(values));
        if (register.fulfilled.match(resultAction)) {
          onSuccess();
          resetForm();
          // Можна додати тут відображення повідомлення про успішну реєстрацію
        } else if (register.rejected.match(resultAction)) {
          // Обробка помилки реєстрації
          console.error("Помилка реєстрації:", resultAction.payload);
          // Відображення повідомлення про помилку користувачу
        }
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Ім'я</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Зареєструватися</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
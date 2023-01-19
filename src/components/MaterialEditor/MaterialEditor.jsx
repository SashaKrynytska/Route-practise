import { Formik, Form, Field } from 'formik';

export const MaterialEditor = ({ onSubmit, isSubmitting }) => {
  //   const handleSubmit = (values, actions) => {
  //     onSubmit(values).then(() => actions.setSubmitting(false)); // когда онсабмит вернул форму и он резолвнулся, значит форму отправили
  //     // кидаем сюда объект который забираем из формы
  //     actions.resetForm();
  //   };
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ title: '', link: '' }}
      //   onSubmit={(values, actions) => {
      //     console.log(values);
      //     actions.resetForm();
      //   }}
      onSubmit={handleSubmit}
    >
      {/* {props => {
        console.log(props.isSubmitting);
        return (
          <Form>
            <label>
              Описание
              <Field name="title" type="text" />
            </label>
            <br />
            <label>
              Ссылка
              <Field name="link" type="text" />
            </label>
            <br />
            <button type="submit" disabled={props.isSubmitting}>
              Добавить материал
            </button>
          </Form>
        );
      }} */}
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="title" type="text" />
          </label>
          <br />
          <label>
            Ссылка
            <Field name="link" type="text" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};

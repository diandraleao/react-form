import React from 'react';
import { Formik, useField } from 'formik';

const Campo = props => { 
  const [field, meta] = useField(props);
   return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {... field}
        {...props}
        className={meta.error && props.touched ? 'is-valid' : ''}
      />
      {meta.error && meta.touched ? (
        <div className='invalid-feedback'>{meta.error}</div>
      ) : null}

    </div>
   )
}

const AdicionaCliente = () => {
  return (
    <>
      <h1>Cadastro de Clientes</h1>

      <Formik 
        initialValues={{ nome: '', email: '', nascimento: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.nome) {
            errors.nome = "O nome é obrigatório";
          }
          if (!values.email) {
            errors.email = "O email é obrigatório";
          }
          if (!values.nascimento) {
            errors.nascimento = "A data de nascimento é obrigatória";
          }
          return errors;
        }}
        onSubmit={(values => {console.log(JSON.stringify(values))})}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit} noValidate>
            <div className="form-group">
              <Campo id="nome" 
                name="nome"
                type="text"
                label="Nome" />
            </div>
            <div className="form-group">
              <Campo id="email" 
                name="email"
                type="email"
                label="E-mail" />
            </div>
            <div className="form-group">
              <Campo id="nascimento" 
                name="nascimento"
                type="date"
                label="Data de Nascimento" />
            </div>
            <button type="submit">Adicionar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdicionaCliente;

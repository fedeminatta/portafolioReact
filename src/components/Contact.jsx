import styles from './sass/Contact.module.sass';

const Contact = () => {
  return (
    <form
      netlify="true"
      method="POST"
      data-netlify="true"
      className={styles.form}
      id="Contact"
    >
      <fieldset>
        <legend>Asunto</legend>
        <input type="text" name="aunto" />
      </fieldset>
      <fieldset>
        <legend>Correo</legend>
        <input type="email" name="email" />
      </fieldset>
      <fieldset className={styles.textarea}>
        <legend>Mensaje</legend>
        <textarea name="mensaje"></textarea>
      </fieldset>
      <div data-netlify-recaptcha="true"></div>
      <button type="submit">Enviar</button>
    </form>
  );
};
export default Contact;

import styles from './sass/Contact.module.sass';

const Contact = () => {
  return (
    <form
      method="post"
      data-netlify="true"
      className={styles.form}
      action="/contact"
      id="Contact"
      name="contact"
    >
      <input type="hidden" name="form-name" value="contact" />
      <fieldset>
        <legend>Asunto</legend>
        <input type="text" name="asunto" />
      </fieldset>
      <fieldset>
        <legend>Correo</legend>
        <input type="email" name="email" />
      </fieldset>
      <fieldset className={styles.textarea}>
        <legend>Mensaje</legend>
        <textarea name="mensaje"></textarea>
      </fieldset>
      {/* <div data-netlify-recaptcha="true"></div> */}
      <button type="submit">Enviar</button>
    </form>
  );
};
export default Contact;

import { Slide } from 'react-awesome-reveal';
import styles from './sass/Contact.module.sass';

const Contact = () => {
    return (
        <Slide direction="right" triggerOnce>
            <form
                method="post"
                data-netlify="true"
                className={styles.form}
                id="Contact"
                name="contact"
            >
                <input name="form-name" value="contact" />
                <fieldset>
                    <legend>Asunto</legend>
                    <input required type="text" name="asunto" />
                </fieldset>
                <fieldset>
                    <legend>Correo</legend>
                    <input required type="email" name="email" />
                </fieldset>
                <fieldset className={styles.textarea}>
                    <legend>Mensaje</legend>
                    <textarea required name="mensaje"></textarea>
                </fieldset>
                <button type="submit">Enviar</button>
            </form>
        </Slide>
    );
};
export default Contact;

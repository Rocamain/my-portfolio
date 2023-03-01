import { useForm, ValidationError } from '@formspree/react';
import IconButton from '../../global/IconButton';
import { FaRegEnvelope, FaWhatsapp, FaHandSpock } from 'react-icons/fa';
import Confirmation from './Confirmation';
export default function ContactForm() {
  const [state, handleSubmit] = useForm('xvonrkaj');

  if (state.succeeded) {
    return (
      <div className="contact_container">
        <Confirmation />
      </div>
    );
  }

  return (
    <div className="contact_container">
      <form
        onSubmit={handleSubmit}
        className="flex gap-2"
        style={{ flexDirection: 'column' }}
      >
        <div>
          <label htmlFor="name" />
          <input
            id="name"
            className="input "
            type="text"
            name="name"
            placeholder="Name"
            required
            minLength="4"
            size="10"
          />
        </div>
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <div>
          <label htmlFor="email" />
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label
          className="label"
          htmlFor="message"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          Message
        </label>
        <textarea
          id="message"
          className="textarea"
          name="message"
          cols="30"
          rows="10"
          minLength="10"
          maxLength="5000"
          required
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="btn"
          style={{ alignItems: 'center' }}
        >
          Submit
        </button>
      </form>
      <div className="contact_details">
        <h3 className="flex gap-1" style={{ marginBottom: '2em' }}>
          <span>Let's talk </span>
          <span>
            <FaHandSpock />
          </span>
        </h3>

        <div className="flex__a_center gap-1">
          <IconButton
            big
            link
            href="mailto:fjrocavazquez@gmail.com&subject=Hello Javi !"
          >
            <div className="flex__a_center gap-1">
              <FaRegEnvelope />
              <span className="contact_details_email">
                fjrocavazquez@gmail.com
              </span>
            </div>
          </IconButton>
        </div>
        <div>
          <IconButton
            big
            link
            href={`https://api.whatsapp.com/send?phone=4407546354496`}
          >
            <div style={{ display: 'flex', gap: '1em', alignItems: 'center' }}>
              <FaWhatsapp />
              <span className="contact_details_phone"> 07546354496 </span>
            </div>
          </IconButton>
        </div>
      </div>
    </div>
  );
}

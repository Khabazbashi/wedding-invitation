function ContactInfo() {
  return (
    <div className="pages__container">
      <div className="pages__header">
        <h1 className="pages__title">Kontakt</h1>
      </div>
      <div className="pages__body">
        <ul className="pages__list">
          <li className="pages__listitem">
            <h2 className="pages__subtitle">Marcus</h2>
            <a className="pages__link" href="tel:XXXX-XXXX">
              XXXX-XXXX
            </a>
            <a
              className="pages__link"
              href="mailto:marcus.lindstrom1@gmail.com"
            >
              marcus.lindstrom1@gmail.com
            </a>
          </li>
          <li className="pages__listitem">
            <h2 className="pages__subtitle">Sara</h2>
            <a className="pages__link" href="tel:XXXX-XXXX">
              XXXX-XXXX
            </a>
            <a className="pages__link" href="mailto:sara.khabazbashi@gmail.com">
              sara.khabazbashi@gmail.com
            </a>
          </li>
        </ul>
        <div className="pages__divider">
          <img src="https://i.pinimg.com/474x/70/57/44/7057443a8c04006983551c91496f954a.jpg" />
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;

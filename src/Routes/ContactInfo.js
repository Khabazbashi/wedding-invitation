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
            <a className="pages__link" href="tel:0760436199">
              0760436199
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
            <a className="pages__link" href="tel:0704176182">
              0704176182
            </a>
            <a className="pages__link" href="mailto:sara.khabazbashi@gmail.com">
              sara.khabazbashi@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactInfo;

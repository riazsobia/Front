import React from "react";

function Contact() {
  return (
    <div className="card">
      <h5 className="card-header">Kontakt</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <img
              className="d-block mx-auto"
              src="/siilogo.png"
              alt="Sii logo"
            ></img>
            <div className="lead d-flex justify-content-center">
              <div className="column">
                <h4 className="">Sii Learning</h4>
                <h5>Passion for technology</h5>
                <p>
                  al. Niepodległości 69
                  <br />
                  02-626 Warszawa
                  <br />
                  tel. +48 22 486 37 37
                  <br />
                  e-mail: <a href="mailto:contact@sii.pl">contact@sii.pl</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1729.5242464962093!2d21.015426851952327!3d52.190387824523675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8d0df1a8465844db!2sSii%20Warszawa!5e0!3m2!1spl!2spl!4v1653998600578!5m2!1spl!2spl"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

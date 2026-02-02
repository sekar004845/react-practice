import "./App.css"; 
import FooterLogo from "../../practice/src/images/footer-logo.png";
import Mail from "../../practice/src/images/mail.png";
import Phone from "../../practice/src/images/phone.png";
import Website from "../../practice/src/images/website.png";


function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row pb-4">
            <div className="col-lg-3 col-md-3 col-12 m-auto">
              <div className="footer-logo">
                <img src={FooterLogo} />
              </div>
            </div>

            <div className="col-lg-9 col-md-9 col-12 m-auto text-md-end">
               <div className="footer-detail">
                  <ul>
                    <li><a href="www.tecalliance.net"><img src={Website} />www.tecalliance.net</a></li>
                    <li><a href="tel:+91 75400 63818"><img src={Phone} />+91 75400 63818</a></li>
                    <li><a href="mailto:Geetha.Chintakula@tecalliance.net"><img src={Mail} />Geetha.Chintakula@tecalliance.net</a></li>
                  </ul>
               </div>
            </div>
          </div>
          <div className="copyrights">
               <p>Copyright © 2026 TecAlliance</p>
          </div>
        </div>
      </section>


    </>
  );
}

export default Footer;

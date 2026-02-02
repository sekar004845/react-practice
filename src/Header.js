import "./App.css"; 
import HeaderLogo from "../../practice/src/images/tecalliance-logo.png";
import TecDoc from "../../practice/src/images/tecdoc.png";



function HeaDer() {
  return (
    <>
      <section className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-6 m-auto">
              <div className="header-logo">
                <img src={HeaderLogo} />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-6 m-auto text-end">
               <div className="header-tecdoc-logo">
                  <img src={TecDoc} />
               </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}

export default HeaDer;

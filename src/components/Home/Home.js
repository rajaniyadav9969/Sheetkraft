import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import Seo from "../seo"
import './Home.scss';

const Home = () => {
    return(
        // <>
        //     <Seo  title="Home" />
        //     <h1>Hi rajani yadav</h1>
        //     <p>Welcome to your new Gatsby site.</p>
        //     <p>Now go build something great.</p>

        //     <p>
        //     <Link to="/page-2/">Go to page 2</Link> <br />
        //     <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        //     <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        //     <Link to="/using-dsg">Go to "Using DSG"</Link>
        //     </p>
        // </>


    <div className="home">
      <div className="process-automation">
        <section className="home-banner">
          <img className="automation-img" src="/img/banner-image.jpg" alt="" />
          <div className="container">
            <div className="content">
              <h1 className="atomation-content">Process automation that has saved over 1,92,000 man-hours annually at 20+ companies </h1>
              <Link to="/book" className="book-demo">Book A Demo</Link> 
            </div>
          </div>
        </section>
        <section className="about-intro">
          <h2 className="heading">
          Are you tired of <span className="typed-cursor">Repetitive Calculation</span>?
          </h2>
          <div className="intro-items">
            <div className="item">
              <img className="icon" src="/icons/1.jpg" alt="" />
              {/* <StaticImage
                alt="icon-1" className="icon"
                src=""  
              /> */}
              <h2 className="title">Rapid Application Development Framework</h2>
            </div>
            <div className="item">
              <img className="icon" src="/icons/2.jpg" alt="" />
              <h2 className="title">Easily Composable Native Building Blocks</h2>
            </div>
            <div className="item">
              <img className="icon" src="/icons/3.jpg" alt="" />
              <h2 className="title">Strong Governance and Built-In Audit Trails</h2>
            </div>
            <div className="item">
              <img className="icon" src="/icons/4.jpg" alt="" />
              <h2 className="title">Customizable Reporting, Dashboards and Analytics</h2>
            </div>
            <div className="item">
              <img className="icon" src="/icons/5.jpg" alt="" />
              <h2 className="title">Fastest Spreadsheet Processing In The Business</h2>
            </div>
          </div>
        </section>
        <section className="what-sheetkraft">
          <img className="what-sheetkraft-banner" src="/img/what-sheetcraft.jpg" alt="" />
          <div className="what-sheetkraft-content">
            <div className="content">
              <h2 className="heading">What is Sheetkraft?</h2>
              <p>Low-Code Platform for Business Process Automation. It helps in eliminating risk, saves money and time by reducing the turn around time of manual processes.</p>
              <Link to="https://www.youtube.com/watch?v=RGKi6LSPDLU" className="play-icon">
                <img className="you-tube" src="/icons/play-button.png" alt="" />
              </Link>
            </div> 
          </div>
        </section>
        <section className="how-does-sheetkraft">
          <div className="sheetkraft-heading">
              <span className="work-process">Work Process</span>
              <h2>How does sheetkraft function?</h2>
          </div>
          <div className="work-list">
            <div className="single-row">
              <div className="item">
                <div className="icon">
                  <img className="img-icon" src="/icons/data-ingestion-1.png" alt="" />
                </div>
                <p>Data Ingestion</p>
              </div>
              <div className="item">
                <div className="icon">
                <img className="img-icon" src="/icons/data-cleansing-2.png" alt="" />
                </div>
                <p>Data Cleansing</p>
              </div>
            </div>
            <div className="single-row">
              <div className="item">
                <div className="icon">
                  <img className="img-icon" src="/icons/cal-engine-3.png" alt="" />
                </div>
                <p>Calculation Engine</p>
              </div>
              <div className="item">
                <div className="icon">
                  <img className="img-icon" src="/icons/cental-repo-4.png" alt="" />
                </div>
                <p>Central Repository</p>
              </div>
            </div>
            <div className="single-row">
              <div className="item">
                <div className="icon">
                  <img className="img-icon" src="/icons/web-platfom-5.png" alt="" />
                </div>
                <p>Web Platfrom</p>
              </div>
              <div className="item">
                <div className="icon">
                <img className="img-icon" src="/icons/rich-reporting-6.png" alt="" />
                </div>
                <p>Rich Reporting</p>
              </div>
            </div>
          </div>
        </section>

        <section className="what-has-sheetkraft-achieved">
          <div className="archived-heading">
            <h2 className="main-heading">What Has Sheetkraft Achieved?</h2>
            <span className="average-our-client">On average our clients have seen</span>    
          </div>
          <div className="content">
            <div className="counter-list">
              <div className="item-heading">
                  <span className="count-to">100+</span>
                <p>Man-Years Saved Annually</p>
              </div>
              <div className="item-heading">
                  <span className="count-to">500+</span>
                <p>Processes automated</p>
              </div>
              <div className="item-heading">
                  <span className="count-to">20+</span>
                <p>BFSI Clients</p>
              </div>
            </div>
            <div className="counter-list">
              <div className="item-heading">
                  <span className="count-to">90+</span>
                <p>Man-Years Saved Annually</p>
              </div>
              <div className="item-heading">
                  <span className="count-to">75+</span>
                <p>Processes automated</p>
              </div>
              <div className="item-heading">
                  <span className="count-to">100+</span>
                <p>BFSI Clients</p>
              </div>
            </div>
          </div>
        </section>
        <section className="what-can-sheetkraft-do">
          <div className="container">
            <div className="row">
              <div className="col-md-4 heading">
                <div className="">
                  <h2 className="title">What can Sheetkraft do for you?</h2>
                  <span>Our prominent use cases</span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="item">
                      <img className="grid-img" src="/icons/Reconciliation.png" alt="" />
                      <h2 className="item-heading">Reconciliation Processing</h2>
                      <Link to="/learn-more" className="learn-more">Learn More</Link>
                    </div>
                  </div>
                  <div className="col-md-6 regulatory-reporting">
                    <div className="item">
                      <img className="grid-img" src="/icons/Regulatory-Reporting.png" alt="" />
                      <h2 className="item-heading">Regulatory Reporting</h2>
                      <Link to="/learn-more" className="learn-more">Learn More</Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item">
                      <img className="grid-img" src="/icons/Financial-Modelling.png" alt="" />
                      <h2 className="item-heading">Financial Modelling</h2>
                      <Link to="/learn-more" className="learn-more">Learn More</Link>
                    </div>
                  </div>
                  <div className="col-md-6 regulatory-reporting">
                    <div className="item">
                      <img className="grid-img" src="/icons/Reconciliation-Processing.png" alt="" />
                      <h2 className="item-heading">Brokerage Calculation</h2>
                      <Link to="/learn-more" className="learn-more">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="where-does-sheetkraft what-has-sheetkraft-achieved">
          <div className="archived-heading">
            <h2 className="main-heading">Where does Sheetkraft stand?</h2>
            <span className="average-our-client">A visual comparison within the technology landscape.</span>    
          </div>
         <img className="sheetkraft-stand" src="/icons/sheetkraft-stand.png" alt="" />
        </section>

        <section className="what-has-sheetkraft-achieved default-section">
          <div className="container">
            <div className="archived-heading">
              <h2 className="main-heading">Our Happy Customers</h2>
              <span className="average-our-client">What are people saying about SheetKraft</span>    
            </div> 
            <div className="content">
              <div className="happy-customer-list">
                <div className="single-item">
                  <div className="item">
                    <img src="/icons/Multi_Commodity_Exchange.png" alt="" />
                    <p className="info">"As an operations unit, we are now able to calculate brokerage every month-end which helps us support the business as we scale."</p>
                    <p>- Operations Head​​</p>
                  </div>  
                </div>
                <div className="single-item">
                  <div className="item">
                    <img src="/icons/hdfc-mutual-fund-vector-logo.png" alt="" />
                    <p className="info">"We prefer to use the Sheetkraft platform for all our new automation requirements."</p>
                    <p>
                      <b>
                        Vaibhav Joshi (Operations Head)
                      </b><br/>
                      - HDFC Mutual Funds
                    ​​</p>
                  </div>  
                </div>
                <div className="single-item">
                  <div className="item">
                    <img src="/icons/citrus.png" alt="" />
                    <p className="info">"Our settlement process automation resulted in the elimination of all manual errors and reduced the processing time from 5 hours to 15 minutes on a daily basis."</p>
                    <p>- Operations Head​​​​</p>
                  </div>  
                </div>
                <div className="single-item">
                  <div className="item">
                    <img src="/icons/aditya-birla-capital.png" alt="" />
                    <p className="info">"We Value Sheetkraft as a trusted partner in our mission to streamline business operations."</p>
                    <p>
                      <b>
                      Siddharth Bhatt (Ex - CTO)
                      </b><br/>
                      - HDFC Mutual Funds
                    ​​</p>
                  </div>  
                </div>
              </div>
            </div>
          </div> 
        </section>
        
        <section className="what-has-sheetkraft-achieved our-clients">
          <div className="container">
            <div className="archived-heading">
              <h2 className="main-heading">Our Clients</h2>
              <span className="average-our-client">SheetKraft has been implemented in several companies across the BFSI space</span>    
            </div> 
            <div className="content">
              <div className="counter-list">
                <div className="client-logo">
                  <img src="/icons/citrus.png" alt="" />
                </div>
                <div className="client-logo">
                  <img src="/icons/hdfc-mutual-fund-vector-logo.png" alt="" />
                </div>
                <div className="client-logo">
                  <img src="/icons/IDFC-Mutual-Fund.png" alt="" />
                </div>
                <div className="client-logo">
                  <img src="/icons/Multi_Commodity_Exchange.png" alt="" />
                </div>
                <div className="client-logo">
                  <img src="/icons/payu.png" alt="" />
                </div>
                <div className="client-logo">
                  <img src="/icons/piramal.png" alt="" />
                </div>
              </div>
            </div>
          </div>       
        </section>

        <section>
          <div className="container">
            <div className="archived-heading">
              <span>Blog</span>
              <h2 className="main-heading">Reads Our Latest News & Blog</h2>
              <span className="average-our-client">Learn what SheetKraft has done for its clients</span>    
            </div>
            <div className="about-intro"> 
              <div className="intro-items">
                <div className="item">
                  <img className="icon" src="/icons/1.jpg" alt="" />
                  <h2 className="title">Rapid Application Development Framework</h2>
                </div>
                <div className="item">
                  <img className="icon" src="/icons/2.jpg" alt="" />
                  <h2 className="title">Easily Composable Native Building Blocks</h2>
                </div>
                <div className="item">
                  <img className="icon" src="/icons/3.jpg" alt="" />
                  <h2 className="title">Strong Governance and Built-In Audit Trails</h2>
                </div>
                <div className="item">
                  <img className="icon" src="/icons/4.jpg" alt="" />
                  <h2 className="title">Customizable Reporting, Dashboards and Analytics</h2>
                </div>
                <div className="item">
                  <img className="icon" src="/icons/5.jpg" alt="" />
                  <h2 className="title">Fastest Spreadsheet Processing In The Business</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        


        <section className="what-has-sheetkraft-achieved default-section blog">
          <div className="container">
            <div className="archived-heading">
              <span>Blog</span>
              <h2 className="main-heading">Reads Our Latest News & Blog</h2>
              <span className="average-our-client">Learn what SheetKraft has done for its clients</span>    
            </div> 
            <div className="content">
              <div className="happy-customer-list">
                <div className="single-item">
                  <div className="item">
                    <img src="/img/WhatsApp-Image-2019-10-16-at-18.14.20-1-1-1270x590.jpeg" alt="" />
                    <p className="info">"As an operations unit, we are now able to calculate brokerage every month-end which helps us support the business as we scale."</p>
                    <p>- Operations Head​​</p>
                  </div>  
                </div>
                <div className="single-item">
                  <div className="item">
                    <img src="/img/Merchant-discount-rate-9-1270x815.png" alt="" />
                    <p className="info">"We prefer to use the Sheetkraft platform for all our new automation requirements."</p>
                    <p>
                      <b>
                        Vaibhav Joshi (Operations Head)
                      </b><br/>
                      - HDFC Mutual Funds
                    ​​</p>
                  </div>  
                </div>
                <div className="single-item">
                  <div className="item">
                    <img src="/img/paper-pen-claim-1270x815.png" alt="" />
                    <p className="info">"Our settlement process automation resulted in the elimination of all manual errors and reduced the processing time from 5 hours to 15 minutes on a daily basis."</p>
                    <p>- Operations Head​​​​</p>
                  </div>  
                </div>
              </div>
            </div>
          </div>   
        </section>
      </div>
    </div>
    );  
}

export default Home

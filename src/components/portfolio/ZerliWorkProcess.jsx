import { useState } from 'react';
import zerliLogo from '../../assets/logoZerli.png'
import zerli1 from '../../assets/Zerli_image1.jpeg'

import { SiUml } from "react-icons/si";
import zerliOrders from '../../assets/zerli_orders.mp4';
import zerliReports from '../../assets/zerli-reports.mp4';



const ZerliWorkProcess = () => {
  const [mutedOrderVideo, setMutedOrderVideo] = useState(true);
  const [mutedReportsVideo, setMutedReportsVideo] = useState(true);


  return (
    <div className="container process_container">
      <div className="process-headline">
        <h1 className="">Zerli Project</h1>
      </div>
      <div className="process-content-section-one">

        <div>
          <img src={zerliLogo} className='zerli-logo' />
          <div className='logo-description' style={{color: '#7b415f' , backgroundColor: '#eee5e9', border: ' 1px solid #7b415f'}}>
            <p >We planed our logo and decided on the color theme of the project</p>
          </div>
        </div>
        <div className="section-one-des">
          <p>My initial team project experience was with a study group.
            We began by receiving a set of requirements on paper, using
            it as a foundation to kickstart the project. In this initial
            phase, we planned, drew up diagrams, and divided the
            workload among team members.
          </p>
          <a href='https://github.com/Gal-Amar/Zerli/tree/main/UML%20Diagrams'  target='_blank'>
           you can see here all the UML Diagrams of the project &nbsp;
            <SiUml size={20} />
          </a>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des">
          <p>Once we finished the design phase, we started working on the project itself
            . At first, we gathered together to concentrate on frontend development,
            making sure we had a clear understanding of where we were headed. Then,
            we broke down our tasks into manageable pieces, assigning specific responsibilities
            to each team member. Personally, I was in charge of the Order section and the creation of reports.
          </p>
        </div>
        <div>
          <img className="project-image" src={zerli1} ></img>
        </div>
      </div>
      <div className="process-content-section-one">
        <div className="project-video">
          <video onClick={() => setMutedOrderVideo(!mutedOrderVideo)} src={zerliOrders} loop autoplay={"autoplay"} muted={mutedOrderVideo} className='project-video' >
          </video>
        </div>
        <div className="section-one-des">
          <p>
            The order segment includes filling out a delivery form, selecting items from the catalog, and processing payment. After payment,
            customers can review their order and cancel it if they desire. The cancellation fees are determined based on the cancellation timeframe.
            <br /><br />
            Moreover, the flower shop manager can view all the orders made within the shop and either approve or disapprove each order.
          </p>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des">
          <p>
          In the 'Report' section, we designed a system that generates reports for different time periods, mainly monthly and yearly. 
          These reports are automatically converted into PDF format and saved in the database. Access to these reports is limited to 
          branch managers and the CEO of Zerli. Authorized personnel can view monthly, yearly, and quarterly reports and compare two 
          reports simultaneously for each time period.
          </p>
        </div>
        <div className="project-video">
          <video onClick={() => setMutedReportsVideo(!mutedReportsVideo)} src={zerliReports} loop autoplay={"autoplay"} muted={mutedReportsVideo} className='project-video' />
        </div>
      </div>
    </div>
  );
}

export default ZerliWorkProcess;
import { FaBookOpen } from "react-icons/fa6";
import safePlanLogo from "../../assets/safeplanelogo.png";
import mainForm from "../../assets/main-form.png";
import csv from "../../assets/csv.png";
import savedTrips from "../../assets/savedTrips.png";
import map from "../../assets/map.png";
import dailyPlan from "../../assets/dailyPlan.png";
import waitingPage from "../../assets/waitingPage.mp4";
const SafePlanWorkProcess = () => {
  return (
    <div className="process_container">
      <div className="process-headline">
        <h1 className="">Safe Plan Project</h1>
      </div>
      <div className="process-content-section-one">
        <div>
          <img
            src={safePlanLogo}
            className="zerli-logo "
            alt="Safe Plan logo"
          />
          <div
            className="logo-description"
            style={{
              color: " #57333d",
              backgroundColor: "rgb(255, 247, 214)",
              border: " 1.5px solid  #57333d",
            }}
          >
            <p>Designed Safe Plan logo using Copilot Ai image generator</p>
          </div>
        </div>
        <div className="section-one-des">
          <p>
            Safe Plan is a revolutionary trip planning website aimed at
            simplifying the vacation planning process for travelers seeking
            comprehensive and personalized itineraries. The platform utilizes
            advanced technologies, including smart templates powered by ChatGPT,
            to swiftly generate detailed trip plans tailored to individual
            preferences. Users can effortlessly input their desired activities,
            dining options, accommodations, and more into an intuitive
            interface, enabling SafePlan to deliver a structured itinerary
            within minutes. By streamlining the planning process, SafePlan
            optimizes efficiency, ensuring users receive a well-organized and
            memorable travel experience without the hassle of extensive
            research.
          </p>
          <a
            href="https://github.com/Gal-Amar/Safe-Plane/blob/main/Capstone%20Project%20Phase%20B.docx"
            target="_blank"
            rel="noreferrer"
          >
            Explore the project book here &nbsp;
            <FaBookOpen size={20} />
          </a>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des">
          <p>
            As part of the Safe Plan couple project, I took charge of the
            frontend development for the website. From browsing various websites
            for inspiration to designing the interface, my focus was on creating
            a highly user-friendly web experience.
            <br />
            <br />
            The website comprises two primary sections. One of these sections is
            the form, designed to assist users in expressing their preferences.
            We've incorporated a free-text option, enabling users to input any
            specific details they desire, ensuring their travel plans are
            tailored precisely to their needs.
          </p>
        </div>
        <div>
          <img
            className="project-image image"
            src={mainForm}
            alt="main-form"
          ></img>
        </div>
      </div>
      <div className="process-content-section-one">
        <div>
          <img className="project-image " src={dailyPlan} alt="main-form"></img>
          <img className="project-image " src={map} alt="main-form"></img>
        </div>
        <div className="section-one-des">
          <p>
            The second main section of the website focuses on travel
            organization, which is initiated upon receiving data from the
            server. This part involves presenting the trip in segmented parts,
            with each segment representing a different aspect of the vacation.
            <br />
            <br />
            One of these segments is the daily plan. Within each day, users can
            find details about attractions and restaurants, including website
            links, descriptions, related images, and location information.
            Additionally, each day concludes with a map displaying the travel
            route for that specific day.
          </p>
        </div>
      </div>
      <div className="process-content-section-two">
        <div className="section-two-des">
          <p>
            Users have the option to export their vacation to a CSV file,
            catering to those who prefer organizing their trips in table format.
            Additionally, we've implemented another feature allowing users to
            save trip details within the "Saved Trips" section, exclusively
            accessible to logged-in users.
          </p>
        </div>
        <div>
          <img className="project-image " src={csv} alt="main-form"></img>
          <img
            className="project-image "
            src={savedTrips}
            alt="main-form"
          ></img>
        </div>
      </div>
      <div className="process-content-section-one">
        <div className="project-video">
          <video
            src={waitingPage}
            controlsList="nofullscreen"
            disablePictureInPicture={"true"}
            loop
            playsInline
            autoplay={"autoplay"}
            muted="true"
            className="project-video"
          />
        </div>
        <div className="section-one-des">
          <p>
            Another feature that has been added is the waiting page, designed to
            help users pass the time while awaiting a response, which may take
            between 3-4 minutes. On this page, users have the option to solve a
            riddle. Once they reveal the answer, another riddle replaces it,
            ensuring continuous entertainment until they receive the vacation
            details.
            <br />
            <br />
            Furthermore, an animated representation of the vacation plan in
            motion has been incorporated to enhance the user experience,
            instilling a sense of anticipation as they await their upcoming
            adventure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafePlanWorkProcess;

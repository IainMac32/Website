import './App.css';
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import JobModal from './JobModal';


const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  orange:{
    default: "orange",
    hover: "darkorange"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5vh 20%;
  border-radius: 15px;
  outline: 0;
  text-transform: uppercase;
  margin: 0px 0px;
  cursor: pointer;
  border-style:none;
  border: 3px solid black; /* Add a black border */
  transition: ease background-color 250ms, ease transform 250ms;
  font-size: 1.5vw;
  width: 18vw; /* Set a fixed width */
  display: flex;
  justify-content: center;
  align-items: center;


  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    transform: translateX(1vw);
  }

  &:active {
    background-color: white; /* Change background color when pressed */
    color: #283593; /* Change text color when pressed */
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 800px; /* Adjust max-width as needed */
  margin: 0 auto; /* Center the container */
`;

const Button2 = styled.button`
  position: relative;
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  border-radius: 15px;
  outline: 0;
  cursor: pointer;
  border-style:none;
  border: 3px solid black; /* Add a black border */
  transition: ease background-color 250ms, ease transform 250ms;
  display: flex;
  flex-direction: column; /* To display company and years vertically */
  justify-content: center;
  align-items: center;
  white-space: nowrap; /* Prevents wrapping to new lines */

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  /* Additional styles for employment information */
  .company {
    font-weight: bold;
  }

  .position {
    font-style: italic; /* Adjust styles for the position text */
    margin-top: 0.2em;
  }

  .years {
    font-size: 1em; /* Adjust the font-size for employment years */
    margin-top: 0.2em;
  }

  @media (min-width: 768px) {
    margin: 20px; /* Increase the margin only on larger screens */
    width: calc(50% - 40px); /* Adjust the width to accommodate the increased margin */
    padding: 8vh 20%; /* Adjust the vertical padding for increased height on larger screens */
    font-size: 2vw; /* Adjust the font-size for larger text on larger screens */
  }

  @media (max-width: 768px) {
    width: 100%; /* Take full width on smaller screens */
    padding: 5vh 15%; /* Adjust the vertical padding for increased height on smaller screens */
    margin: 10px;
    font-size: 1.2vw; /* Adjust the font-size for larger text on smaller screens */
  }
`;




Button.defaultProps = {
  theme: "blue"
};

const center = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "75%", 
  height: "100vh",
  color: "black",
  fontSize: 30,
  marginLeft: "25%",
};

export default function App() {

  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const openJobModal = (jobInfo) => {
    setSelectedJob(jobInfo);
    setJobModalOpen(true);
  };

  const closeJobModal = () => {
    setJobModalOpen(false);
  };
  
  const section1 = useRef();
  const section2 = useRef();
  const section3 = useRef();
  const section4 = useRef();
  const toTop = useRef();

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  const scrollToTop = (elmRef) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [show, setshow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("window.scrollY", window.scrollY);
      if (window.scrollY > 500) {
        setshow(true);
      } else {
        setshow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <ul style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "25vw",
          height: "100vh",
          top: 0,
          left: 0,
          padding: 0,
          justifyContent: "space-evenly",
          position: "fixed",
          background: "darkblue",
        }}>
          <h1 style={{
            fontSize: "2.5vw",
            color: "white",
          }}>Iain Macdonald</h1>
          
          <Button onClick={() => scrollHandler(section1)}>About</Button>
          <Button onClick={() => scrollHandler(section2)}>Experience</Button>
          <Button onClick={() => scrollHandler(section3)}>Projects</Button>
          <Button onClick={() => scrollHandler(section4)}>Skills</Button>

          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="https://github.com/IainMac32" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/github.png" alt="GitHub Logo" style={{ width: "2.5vw", marginRight: "2vw" }} />
            </a>
            <a href="https://ca.linkedin.com/in/iain-macdonald-78717720a" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/LinkedIn.png" alt="LinkedIn Logo" style={{ width: "2.5vw" }} />
            </a>
          </div>




          
        </ul>
      </header>

      <div 
        ref={section1}
        style={{
          background: "red",
          ...center,
        }}
      >About</div>

      <div 
        ref={section2} 
        style={{
          background: "green",
          ...center,
        }}> 

        <ButtonContainer>
          <Button2 theme="orange" onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. I hat. The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
            <span className="company">Town of Oakville</span>
            <span className="position">Lawn Cutter</span>
            <span className="years">Jan 2023 - Sept 2023</span>
          </Button2>
  
          <Button2 theme="orange" onClick={() => openJobModal({
            company: 'Local Student',
            position: 'Landscaper',
            years: 'Sept 2022 - Nov 2022',
            duties: 'blah blah'
          })}>
            <span className="company">Local Student</span>
            <span className="position">Landscaper</span>
            <span className="years">Sept 2022 - Nov 2022</span>
          </Button2>
  
          <Button2 theme="orange" onClick={() => openJobModal({
            company: 'Digital Fire',
            position: 'IT Consultant',
            years: 'Jan 2021 - June 2021',
            duties: 'yo'
          })}>
            <span className="company">Digital Fire</span>
            <span className="position">IT Consultant</span>
            <span className="years">Jan 2021 - June 2021</span>
          </Button2>
  
          <Button2 theme="orange" onClick={() => openJobModal({
            company: 'Sobeys',
            position: 'Cashier',
            years: 'Aug 2020 - Dec 2020',
            duties: 'among us'
          })}>
            <span className="company">Sobeys</span>
            <span className="position">Cashier</span>
            <span className="years">Aug 2020 - Dec 2020</span>
          </Button2>
        </ButtonContainer>

        <JobModal isOpen={jobModalOpen} onClose={closeJobModal} jobInfo={selectedJob} />


        
      </div>

      <div 
        ref={section3}
        style={{
          background: "purple",
          ...center,
        }}
      >Projects</div>

      <div 
        ref={section4}
        style={{
          background: "orange",
          ...center,
        }}
      >Skills</div>

      <div style={{
        position: "fixed",
        right: 10,
        bottom: 20,
      }}
      onClick={() => scrollToTop(toTop)}
      >{show && <Button>GO TO TOP</Button>}</div>
    </div>
  );
}

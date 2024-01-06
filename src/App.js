import './App.css';
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import JobModal from './JobModal';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedinLogo.png';


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
  max-width: 1500px; /* Adjust max-width as needed */
  margin 0% auto;
  box-sizing: border-box;
`;

const Button2 = styled.button`
  box-sizing: border-box;
  position: relative;
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
    transform: scale(1.03);
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

  box-sizing: border-box; /* Include padding and border in the total width */
  ${(props) => props.customStyles}

  @media (min-width: 768px) {
    width: 33vw; /* Adjust the width for larger screens to form a 2x2 grid */
    font-size: 2vw; /* Adjust the font-size for larger screens */
    height: 27vh; /* Adjust the vertical padding for increased height on larger screens */

  }

  @media (max-width: 768px) {
    width: 100%; /* Take full width on smaller screens to stack vertically */
    margin: 10px; /* Default spacing between buttons on smaller screens */
    font-size: 2.0vw; /* Adjust the font-size for smaller screens */
    padding: 5vh 15%; /* Adjust the vertical padding for increased height on smaller screens */
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
  const [scrollPosition, setScrollPosition] = useState(0);



  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [isButtonHovered1, setIsButtonHovered1] = useState(false);
  const [isButtonHovered2, setIsButtonHovered2] = useState(false);
  const [isButtonHovered3, setIsButtonHovered3] = useState(false);
  const [isButtonHovered4, setIsButtonHovered4] = useState(false);





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


  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  


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
          
          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * -0.5 &&
              scrollPosition <= window.innerHeight * 0.5) || isButtonHovered1 ? '1vw': '0'})`,
                  }}
            onClick={() => scrollHandler(section1)}
            onMouseEnter={() => setIsButtonHovered1(true)} 
            onMouseLeave={() => setIsButtonHovered1(false)} 
          >about </Button>

          
          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * 0.5 &&
              scrollPosition <= window.innerHeight * 1.5) || isButtonHovered2 ? '1vw': '0'})`,
                  }}
            onClick={() => scrollHandler(section2)}
            onMouseEnter={() => setIsButtonHovered2(true)} 
            onMouseLeave={() => setIsButtonHovered2(false)} 
          >experience </Button>

          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * 1.5 &&
              scrollPosition <= window.innerHeight * 2.5) || isButtonHovered3 ? '1vw': '0'})`,
                  }}
            onClick={() => scrollHandler(section3)}
            onMouseEnter={() => setIsButtonHovered3(true)} 
            onMouseLeave={() => setIsButtonHovered3(false)} 
          >Projects </Button>
          

          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * 2.5 &&
              scrollPosition <= window.innerHeight * 4) || isButtonHovered4 ? '1vw': '0'})`,
                  }}
            onClick={() => scrollHandler(section4)}
            onMouseEnter={() => setIsButtonHovered4(true)}
            onMouseLeave={() => setIsButtonHovered4(false)}
          >Skills </Button>

          <div style={{ display: "flex", alignItems: "center" }}>
            <a href="https://github.com/IainMac32" target="_blank" rel="noopener noreferrer">
              <div style={{ marginRight: "2vw"}}>
                <img src={githubLogo} alt="GitHub Logo" style={{ width: "2.5vw" }} />
              </div>
            </a>
            <a href="https://ca.linkedin.com/in/iain-macdonald-78717720a" target="_blank" rel="noopener noreferrer">
              <div>
                <img src={linkedinLogo} alt="LinkedIn Logo" style={{ width: "2.5vw" }} />
              </div>
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
          <Button2 
          theme="orange"
          customStyles={{
            marginLeft: '4%',
            marginRight: '0%',
            marginBottom: '2.5%',

          }}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
            <span className="company">Town of Oakville</span>
            <span className="position">Lawn Cutter</span>
            <span className="years">Jan 2023 - Sept 2023</span>
          </Button2>
  
          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '0%',
            marginRight: '4%',
            marginBottom: '2.5%',
          }}
          onClick={() => openJobModal({
            company: 'Local Student',
            position: 'Landscaper',
            years: 'Sept 2022 - Nov 2022',
            duties: 'blah blah'
          })}>
            <span className="company">Local Student</span>
            <span className="position">Landscaper</span>
            <span className="years">Sept 2022 - Nov 2022</span>
          </Button2>
  
          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '4%',
            marginRight: '0%',
            marginBottom: '0%',
          }}
          onClick={() => openJobModal({
            company: 'Digital Fire',
            position: 'IT Consultant',
            years: 'Jan 2021 - June 2021',
            duties: 'yo'
          })}>
            <span className="company">Digital Fire</span>
            <span className="position">IT Consultant</span>
            <span className="years">Jan 2021 - June 2021</span>
          </Button2>
  
          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '0%',
            marginRight: '4%',
            marginBottom: '0%',
          }}
          onClick={() => openJobModal({
            company: 'Sobeys',
            position: 'Cashier',
            years: 'Aug 2020 - Dec 2020',
            duties: 'among us'
          })}>
            <span className="company">Sobeys</span>
            <span className="position">Cashier</span>
            <span className="years">Aug 2020 - Dec 2020</span>
          </Button2>

          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '28%',
            marginRight: '0%',
            marginBottom: '0%',
            marginTop: '2.5%',

          }}
          onClick={() => openJobModal({
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
      >
        <ButtonContainer>
          <Button2 
          theme="orange"
          customStyles={{
            marginLeft: '0%',
            marginRight: '0%',
            marginBottom: '0%',
          }}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. I hat. The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
            <span className="company">Town of Oakville</span>
            <span className="position">Lawn Cutter</span>
            <span className="years">Jan 2023 - Sept 2023</span>
          </Button2>
        </ButtonContainer>




      </div>

      <div 
        ref={section4}
        style={{
          background: "orange",
          ...center,
        }}
      >Skills</div>

    </div>
  );
}

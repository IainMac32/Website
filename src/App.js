import './App.css';
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import JobModal from './JobModal';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedinLogo.png';
import IainPhoto from './assets/IainPhoto.png';
import './App.css';  // Move this import to the top



const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  orange:{
    default: "#FFA011",
    hover: "#D47F00"
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

  &:active {
    color: black; /* Change text color when pressed */
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
    width: 31vw; /* Adjust the width for larger screens to form a 2x2 grid */
    font-size: 4.0vh; /* Adjust the font-size for larger screens */
    height: 26vh; /* Adjust the vertical padding for increased height on larger screens */

  }

  @media (max-width: 768px) {
    width: 100%; /* Take full width on smaller screens to stack vertically */
    margin: 10px; /* Default spacing between buttons on smaller screens */
    font-size: 2.0vw; /* Adjust the font-size for smaller screens */
    padding: 5vh 15%; /* Adjust the vertical padding for increased height on smaller screens */
  }
`;




const Button3 = styled.button`
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

  .language {
    font-weight: bold;
    display: flex;
    align-items: center; // Align items vertically in the flex container

    .image {
      margin-right: 10px; // Adjust spacing between image and text
      max-width: 5vh; // Set a max-width for the image
      border-radius: 5px;
    }
  }

  .years {
    font-size: 1em; /* Adjust the font-size for employment years */
    margin-top: 0.2em;
  }

  box-sizing: border-box; 
  ${(props) => props.customStyles}

  @media (min-width: 768px) {
    width: 20vw; /* Adjust the width for larger screens to form a 2x2 grid */
    font-size: 3.2vh; /* Adjust the font-size for larger screens */
    height: 25.8vh; /* Adjust the vertical padding for increased height on larger screens */
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

const HiText = styled.span`
  font-size: 2vw;
  font-weight: bold;
  display: inline-block;
  animation: colorChange 15s infinite linear;
  
  @keyframes colorChange {
    0% {color: violet;}
    14.28% {color: indigo;}
    28.56% {color: blue;}
    42.84% {color: green;}
    57.12% {color: yellow;}
    71.4% {color: orange;}
    85.68% {color: red;}
    100% {color: violet;}
  }`;

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

  const BoldOutlineText = styled.span`
    font-weight: bold;
    text-shadow: 0 0 3px white; 
  `;

  const StyledParagraph = styled.p`
  text-align: left;

  margin-right: 7%;

  @media (min-width: 768px) {
    font-size: 1.6vw;
  }

  @media (max-width: 768px) {
    font-size: 3.0vw;
  }
`;

const StyledH1 = styled.h1`
  margin-top: 0.5%;
  margin-bottom: 1.2vh;
  font-size: 3.6vw;
  text-shadow: 0 0 20px white;
  color: black;

  @media (max-width: 768px) {
    font-size: 10vw;
    margin-top: 5.0%;

  }
`;


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
          background: "rgb(40,40,255)",
        }}>
          <h1 style={{
            fontSize: "2.5vw",
            color: "white",
            marginTop: "5%",
            marginBottom: "5%",
          }}>Iain Macdonald</h1>
          
          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * -0.5 &&
                scrollPosition <= window.innerHeight * 0.5) || isButtonHovered1 ? '1vw': '0'})`,
              backgroundColor: (scrollPosition > window.innerHeight * -0.5 &&
                scrollPosition <= window.innerHeight * 0.5) || isButtonHovered1 ? '#283593' : '#3f51b5',
          
                  }}
            onClick={() => scrollHandler(section1)}
            onMouseEnter={() => setIsButtonHovered1(true)} 
            onMouseLeave={() => setIsButtonHovered1(false)} 
          >about </Button>

          
          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * 0.5 &&
                scrollPosition <= window.innerHeight * 1.5) || isButtonHovered2 ? '1vw': '0'})`,
              backgroundColor: (scrollPosition > window.innerHeight * 0.5 &&
                scrollPosition <= window.innerHeight * 1.5) || isButtonHovered2 ? '#283593' : '#3f51b5',

                  }}
            onClick={() => scrollHandler(section2)}
            onMouseEnter={() => setIsButtonHovered2(true)} 
            onMouseLeave={() => setIsButtonHovered2(false)} 
          >experience </Button>

          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * 1.5 &&
                scrollPosition <= window.innerHeight * 2.5) || isButtonHovered3 ? '1vw': '0'})`,
              backgroundColor: (scrollPosition > window.innerHeight * 1.5 &&
                scrollPosition <= window.innerHeight * 2.5) || isButtonHovered3 ? '#283593' : '#3f51b5',

                  }}
            onClick={() => scrollHandler(section3)}
            onMouseEnter={() => setIsButtonHovered3(true)} 
            onMouseLeave={() => setIsButtonHovered3(false)} 
          >Projects </Button>
          

          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * 2.5 &&
                scrollPosition <= window.innerHeight * 4) || isButtonHovered4 ? '1vw': '0'})`,
              backgroundColor: (scrollPosition > window.innerHeight * 2.5 &&
                scrollPosition <= window.innerHeight * 4) || isButtonHovered4 ? '#283593' : '#3f51b5',

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
          background: "rgb(80,80,255)",
          ...center,
          flexDirection: "row", // Set flex direction to column

          alignItems: "center", // Center items horizontally
          justifyContent: "center", // Center items vertically
          
        }}>
              <img
              src={IainPhoto}
              alt="Iain"
              style={{
                width: "30%", // Adjust the width as needed
                height: "auto",
                borderRadius: "0%", // Make the image circular if desired
                marginLeft: "7%",
              }}/>

            <StyledParagraph>
              <p style={{ textAlign: "left", marginTop: "2%", marginRight: "7%",}}>
                <HiText>Hi!</HiText> I'm Iain Macdonald an inquisitive, diligent, and hard-working first-year computer science student at McMaster University. My aspiration is to pursue acareer in the tech industry as a developer, and I am currently <BoldOutlineText>seeking a Summer co-op placement lasting 4 months</BoldOutlineText>. With a strong foundation in computer science principles and a passion for problem-solving, I am eager to apply my analytical and collaborative skills to a dynamic work environment.
              </p>
            </StyledParagraph>

      </div>
        

      <div 
        ref={section2} 
        style={{
          background: "rgb(110,110,255)",
          ...center,
          flexDirection: "column", // Set flex direction to column
          alignItems: "center", // Center items horizontally
          justifyContent: "flex-start", // Align items at the start of the container (top)
      
        }}> 
          <StyledH1>Experience</StyledH1>



        <ButtonContainer>
          <Button2 
          theme="orange"
          customStyles={{
            marginLeft: '5.0vw',
            marginRight: '0%',
            marginBottom: '2.5%',

          }}
            onClick={() => openJobModal({
            company: 'Mac AI',
            position: 'Software Developer',
            years: 'Oct 2023 - Present',
            duties: 'Developing an innovative Python application that involves vectorizing different types of inputted documents, storing them in adatabase, and leveraging GPT-3.5 to provide accurate answers to user-generated questions.\n\nUtilizing advanced technologies, including LLM, Vectorization, Vector Database, and Similarity Search through API integration.\n\nCollaborating seamlessly within a team of 7 through GitHub, actively contributing to open communication while engaging indiscussions about design ideas during weekly meetings and daily reporting.'
          })}>
            <span className="company">Mac AI</span>
            <span className="position">Software Developer</span>
            <span className="years">Oct 2023 - Present</span>
          </Button2>
  
          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '0%',
            marginRight: '5.0vw',
            marginBottom: '2.5%',
          }}
          onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'General Labourer',
            years: 'May 2023 - Aug 2023',
            duties: 'Operated heavy machinery, including lawnmowers and trimmers, to thoroughly cut and trim public parks and trails.\n\nDemonstrated leadership by taking charge during periods of low activity, ensuring tasks were organized and completed properly.'
          })}>
            <span className="company">Town of Oakville</span>
            <span className="position">General Labourer</span>
            <span className="years">May 2023 - Aug 2023</span>
          </Button2>
  
          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '5vw',
            marginRight: '0%',
            marginBottom: '0%',
          }}
          onClick={() => openJobModal({
            company: 'LocalStudent.com',
            position: 'Landscaper',
            years: 'Jul 2022 - Sep 2022',
            duties: 'Mowed/Trimmed lawns.\n\nWeeded gardens'
           })}>
            <span className="company">LocalStudent.com</span>
            <span className="position">Landscaper</span>
            <span className="years">Jul 2022 - Sep 2022</span>
          </Button2>
  
          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '0%',
            marginRight: '5vw',
            marginBottom: '0%',
          }}
          onClick={() => openJobModal({
            company: 'Digital Fire',
            position: 'IT Co-op Placement',
            years: 'Feb 2022 - Jun 2022',
            duties: 'Applied technical skills with precision to efficiently set up, configure, and upgrade laptops and desktops, seamlessly integratinghardware and software components to ensure optimal system performance and long-term reliability.\n\nAcquired coding proficiency to develop an office inventory system, resulting in improved organization and operational efficiency.\n\nPlayed a key role in important projects by working on hardware construction, and enhancing overall technology.'
          })}>
            <span className="company">Digital Fire</span>
            <span className="position">IT Co-op Placement</span>
            <span className="years">Feb 2022 - Jun 2022</span>
          </Button2>

          <Button2 theme="orange" 
          customStyles={{
            marginLeft: '29%',
            marginRight: '0%',
            marginBottom: '0%',
            marginTop: '2.5%',

          }}
          onClick={() => openJobModal({
            company: 'Sobeys',
            position: 'Front End Cashier',
            years: 'May 2021 - Sep 2021',
            duties: 'Operated an advanced point-of-sale system with precision, ensuring smooth customer transactions and accurate sales records.\n\nDeveloped effective communication skills to assist customers, creating a positive shopping experience and contributing to acustomer-focused environment.'
          })}>
            <span className="company">Sobeys</span>
            <span className="position">Front End Cashier</span>
            <span className="years">May 2021 - Sep 2021</span>
          </Button2>        
        </ButtonContainer>

        <JobModal isOpen={jobModalOpen} onClose={closeJobModal} jobInfo={selectedJob} />


        
      </div>

      <div 
        ref={section3}
        style={{
          background: "rgb(80,80,255)",
          ...center,
          flexDirection: "column", // Set flex direction to column
          alignItems: "center", // Center items horizontally
          justifyContent: "flex-start", // Align items at the start of the container (top)
        }}>
        <StyledH1>Projects</StyledH1>

        <ButtonContainer>
          <Button2 
          theme="orange"
          customStyles={{
            marginLeft: '0%',
            marginRight: '0%',
            marginBottom: '0%',
            marginTop: '15vh',
          }}
            onClick={() => openJobModal({
            company: 'Portfolio Website',
            position: 'GitHub',
            years: 'Dec 2023 - Present',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. I hat. The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
            <span className="company">Portfolio Website</span>
            <span className="years">Dec 2023 - Present</span>
          </Button2>
        </ButtonContainer>




      </div>


      <div 
        ref={section4} 
        style={{
          background: "rgb(110,110,255)",
          ...center,
          flexDirection: "column", // Set flex direction to column
          alignItems: "center", // Center items horizontally
          justifyContent: "flex-start", // Align items at the start of the container (top)

        }}> 

          <StyledH1>Skills</StyledH1>

        <ButtonContainer>
        <Button3 
          theme="orange"
          customStyles={{marginLeft: '5vw',marginRight: '0%',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/python.png')} alt="PythonLogo" className="image" />
                Python </span>
            <span className="years">Since 2020</span>
          </Button3>
  
          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '0%',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/react.png')} alt="PythonLogo" className="image" />
                React/CSS/HTML </span>             
                <span className="years">Since 2023</span>
          </Button3>

  
          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '5vw',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/javascript.png')} alt="PythonLogo" className="image" />
                JavaScript </span>              
                <span className="years">Since 2022</span>
          </Button3>
  
          <Button3 
          theme="orange"
          customStyles={{marginLeft: '5vw',marginRight: '0%',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/java.png')} alt="PythonLogo" className="image" />
                Java </span>                
                <span className="years">Since 2022</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '0%',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/elm.png')} alt="PythonLogo" className="image" />
                Elm </span>                
                <span className="years">Since 2023</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '5vw',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/processingpython.png')} alt="PythonLogo" className="image" />
                Processing Python </span>                
                <span className="years">2017 - 2022</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '16vw',marginRight: '0%',marginBottom: '0',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/p5js.jpg')} alt="PythonLogo" className="image" />
                P5.js </span>                
                <span className="years">2017 - 2022</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '16vw',marginBottom: '0',}}
            onClick={() => openJobModal({
            company: 'Town of Oakville',
            position: 'Lawn Cutter',
            years: 'Jan 2023 - Sept 2023',
            duties: 'Responsible for maintaining lawns and outdoor spaces. I kind of like to eat food, but I also like to sleep. I hate sleeping. \n\n I hat. \n\n The flowers smell nice at night even though its raining out I still like to sit there and smell them'
          })}>
              <span className="language">
                <img src={require('./assets/github.png')} alt="PythonLogo" className="image" />
                GitHub </span>                
                <span className="years">Since 2023</span>
          </Button3>


        </ButtonContainer>



        
      </div>

    </div>
  );
};

import './App.css';
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import JobModal from './JobModal';
import githubLogo from './assets/github.png';
import linkedinLogo from './assets/linkedinLogo.png';
import resumeLogo from './assets/resumeLogo (2).png';
import IainPhoto from './assets/IainPhoto.png';
import './App.css';  // Move this import to the top
import resume from './assets/IainMacdonald-2024Resume.pdf';




const theme = {
  blue: {
    default: "rgb(73,117,156)",
    hover: "#2F4B63"
  },
  orange:{
    default: "rgb(255,181,114)",
    hover: "rgb(216,134,59)"
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
    font-size: 1em; 
    margin-top: 0.2em;
  }

  box-sizing: border-box; /* Include padding and border in the total width */
  ${(props) => props.customStyles}

  @media (min-width: 768px) {
    width: 31vw; 
    font-size: 4.0vh; 
    height: 26vh; 

  }

  @media (max-width: 768px) {
    width: 100%; 
    margin: 10px; 
    font-size: 2.0vh; 
    padding: 3vh 15%; 
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
  border: 3px solid black; 
  transition: ease background-color 250ms, ease transform 250ms;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  white-space: nowrap; 

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    transform: scale(1.03);
  }

  .language {
    font-weight: bold;
    display: flex;
    align-items: center; 

    .image {
      margin-right: 10px; 
      max-width: 5vh; 
      border-radius: 5px;
    }
  }

  .years {
    font-size: 1em; 
    margin-top: 0.2em;
  }

  box-sizing: border-box; 
  ${(props) => props.customStyles}

  @media (min-width: 768px) {
    width: 20vw; 
    font-size: 3.2vh; 
    height: 25.8vh; 
  }

  @media (max-width: 768px) {
    width: 100%; 
    margin: 2px; 
    font-size: 2.0vh; 
    padding: 1vh 15%;
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
  font-weight: bold;
  display: inline-block;
  animation: colorChange 2s infinite linear;
  line-height: 0;

  @media (min-width: 768px) {
    font-size: 2.5vw;
  }

  @media (max-width: 768px) {
    font-size: 3.0vh;

  }
  
  @keyframes colorChange {
    0% {color: rgb(255,110,0);}
    50% {color: white;}
    100% {color: rgb(255,110,0);}
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
  margin-right: 7%;
  font-size: 1.6vw; 
  text-align: left; 

  @media (max-width: 768px) {
    font-size: 2.0vh; 
    text-align: center; 
    margin-left: 9vw; 
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

const StyledDiv = styled.div`
  background: rgb(193,205,211);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column; /* Default to column for smaller screens */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledImg = styled.img`
  width: 30%; /* Default width for larger screens */
  height: auto;
  border-radius: 0%; /* Make the image circular if desired */
  margin-left: 7%;
  margin-bottom: 2%; /* Add margin to create space between image and text on smaller screens */

  @media (max-width: 768px) {
    width: 50%; /* Adjust the width for smaller screens */
  }
`;

const StyledLogo = styled.img`
  width: 2.5vw; /* Default width for larger screens */
  @media (max-width: 768px) {
    width: 2.5vh;
  }
`;

const StyledHeader = styled.h1`
  font-size: 2.5vw; /* Default font size for larger screens */
  color: white;
  margin-top: 5%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    font-size: 2vh; /* Adjusted font size for smaller screens */
    text-align: center;
    margin-top: 0%;
    margin-bottom: 0%;
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
          background: "#2F4B63",
          borderRight: "3px solid black",
        }}>
          <StyledHeader>Iain Macdonald</StyledHeader>
          
          <Button
            style={{
              transform: `translateX(${(scrollPosition > window.innerHeight * -0.5 &&
                scrollPosition <= window.innerHeight * 0.5) || isButtonHovered1 ? '1vw': '0'})`,
              backgroundColor: (scrollPosition > window.innerHeight * -0.5 &&
                scrollPosition <= window.innerHeight * 0.5) || isButtonHovered1 ? '#2F4B63' : 'rgb(193,205,211)',
          
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
                scrollPosition <= window.innerHeight * 1.5) || isButtonHovered2 ? '#2F4B63' : 'rgb(193,205,211)',

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
                scrollPosition <= window.innerHeight * 2.5) || isButtonHovered3 ? '#2F4B63' : 'rgb(193,205,211)',

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
                scrollPosition <= window.innerHeight * 4) || isButtonHovered4 ? '#2F4B63' : 'rgb(193,205,211)',

                  }}
            onClick={() => scrollHandler(section4)}
            onMouseEnter={() => setIsButtonHovered4(true)}
            onMouseLeave={() => setIsButtonHovered4(false)}
          >Skills </Button>

          <div style={{ display: "flex", alignItems: "center" }}>
            
            <div style={{ marginRight: "2vw", cursor: "pointer" }}
                      onClick={() => window.open("https://github.com/IainMac32", "_blank")}>
                      <StyledLogo src={githubLogo} alt="GitHub Logo" />
            </div>

            <a href="https://ca.linkedin.com/in/iain-macdonald-78717720a" target="_blank" rel="noopener noreferrer">
              <div>
                <StyledLogo src={linkedinLogo} alt="LinkedIn Logo" />
              </div>
            </a>

            <div style={{ marginLeft: "2vw", cursor: "pointer" }}
              onClick={() => window.open(resume, "_blank")}>
              <StyledLogo src={resumeLogo} alt="Resume Logo" />
            </div>

          </div>








          
        </ul>
      </header>


      <StyledDiv ref={section1} style = {{...center,}}>
        <StyledImg src={IainPhoto} alt="Iain" />

            <StyledParagraph>
              <p style={{  marginTop: "2%", marginRight: "7%",}}>
                <HiText>Hi!</HiText> I'm Iain Macdonald, an inquisitive, diligent, and hard-working first-year computer science student at McMaster University. My aspiration is to pursue a career in the tech industry as a developer, and I am currently <BoldOutlineText>seeking a Summer co-op placement lasting 4 months</BoldOutlineText>. With a strong foundation in computer science principles and a passion for problem-solving, I am eager to apply my analytical and collaborative skills to a dynamic work environment.
              </p>
            </StyledParagraph>
            
      </StyledDiv>
        

      <div 
        ref={section2} 
        style={{
          background: "#2F4B63",
          ...center,
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "flex-start", 
      
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
            duties: 'Developing an innovative Python application that involves vectorizing different types of inputted documents, storing them in a database, and leveraging GPT-3.5 to provide accurate answers to user-generated questions.\n\nUtilizing advanced technologies, including LLM, Vectorization, Vector Database, and Similarity Search through API integration.\n\nCollaborating seamlessly within a team of 7 through GitHub, actively contributing to group sessions while engaging in discussions about design ideas during weekly meetings and daily reporting.'
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
            duties: 'Founded and operated my own lawn care service while at LocalStudent.com, taking on responsibilities such as client management, scheduling, and ensuring high-quality landscaping services.\n\nTook care of lawns by mowing and trimming as well as weeding gardens with precision, ensuring a neat and polished appearance for outdoor spaces.'
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
            duties: 'Applied technical skills with precision to efficiently set up, configure, and upgrade laptops and desktops, integrating hardware and software components to ensure optimal system performance and long-term reliability.\n\nAcquired coding proficiency to develop an office inventory system, resulting in improved organization and operational efficiency.\n\nPlayed a key role in important projects by working on hardware construction, and enhancing overall technology.'
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
            duties: 'Operated an advanced point-of-sale system with accuracy, ensuring smooth customer transactions and accurate sales records.\n\nDeveloped effective communication skills to assist customers, creating a positive shopping experience and contributing to a customer-focused environment.'
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
          background: "rgb(193,205,211)",
          ...center,
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "flex-start", 
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
              duties: 'Applied React.js, HTML, and CSS to develop a personal portfolio website within a 2-week timeframe.\n\nThis task involved mastering intricate details and implementing these technologies to create a user-friendly and visually appealing interface. It also showcases a diverse array of React.js techniques that can be transferred to other front-end projects.',
              githubLink: 'https://github.com/IainMac32/Website', 
            })}>
            <span className="company">Portfolio Website</span>
            <span className="years">Dec 2023 - Present</span>
          </Button2>

        </ButtonContainer>




      </div>


      <div 
        ref={section4} 
        style={{
          background: "#2F4B63",
          ...center,
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "flex-start", 

        }}> 

          <StyledH1>Skills</StyledH1>

        <ButtonContainer>
        <Button3 
          theme="orange"
          customStyles={{marginLeft: '5vw',marginRight: '0%',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Python',
            position: '',
            years: 'Since 2020',
            duties: '\n\nPython is likely my strongest coding language, as I have been using it since I was about 14.\n\nI think that Python is so distinctive as it is easy for beginners to learn but has such a high level of potential especially when creating AI.\n\nThe backend of my current Mac AI project is coded in Python so I am continually increasing my knowledge about the language.            '
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
            company: 'React/CSS/HTML',
            position: '',
            years: 'Since 2023',
            duties: '\n\nWhile learning React during the development of my website I learned how complex front-end design can be.\n\nI was able to learn how to think abstractly and technically about programming while using this framework. I learned how to use React within 2 weeks in order to make my personal website.'
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
            company: 'JavaScript',
            position: '',
            years: 'Since 2022',
            duties: '\n\nWhile working on my personal website I learned how to program in JavaScript and I thoroughly enjoyed it.\n\nJavaScript allowed me to add a level of creativity to my code that I was unable to do before and it was genuinely entertaining. I hope to use more JavaScript in the future along with React to create more fascinating websites.\n\nIn addition to my website I have also used JS in the past to make personal projects within Google Appscript to manipulate Google Sheets. I even made a full inventory system with it during my Digital Fire co-op.'
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
            company: 'Java',
            position: '',
            years: 'Since 2022',
            duties: '\n\nI learnt Java for the first time while in grade 12 and really enjoyed it. Java quickly became one of my favourite languages as it is very straightforward but still viable for large projects.\n\nI got really into Java during grade 12 but unfortunately, I haven’t found many chances to use it since so I hope I can find opportunities to utilize it in the future.'
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
            company: 'Elm',
            position: '',
            years: 'Since 2023',
            duties: '\n\nElm is what I learned during my first semester of university in a course called Introduction to Computational Thinking.\n\nElm was the first functional language that I learned so it took a while to adjust but after the semester I felt confident in functional coding.\n\nI had many group projects throughout the semester that not only increased my skills with Elm but also with communication and accountability while working within a group.'
          })}>
              <span className="language">
                <img src={require('./assets/elm.png')} alt="PythonLogo" className="image" />
                Elm </span>                
                <span className="years">Since 2023</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '5vw',marginBottom: '0',}}
            onClick={() => openJobModal({
            company: 'P5.js',
            position: '',
            years: '2017 - 2022',
            duties: '\n\nI used P5.js while taking coding lessons from the age of 12 to 17 with Hatch Coding. \n\nThis was my introduction to visual programming and ever since I have been interested in learning new ways to show off my code in unique graphical ways, it even motivated me to make this website!\n\nThis is the language that I won both the Hatch Game Jam and Digital Coded Art Competition.'
          })}>
              <span className="language">
                <img src={require('./assets/p5js.jpg')} alt="PythonLogo" className="image" />
                P5.js </span>                
                <span className="years">2017 - 2022</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '16vw',marginRight: '0%',marginBottom: '4vh',}}
            onClick={() => openJobModal({
            company: 'Processing Python',
            position: '',
            years: '2017 - 2022',
            duties: '\n\nAlong with P5.js I also learned Processing Python while at Hatch Coding from the age of 12 to 17.\n\nI decided to learn Processing Python alongside P5.js so that I could learn the formatting of Python before learning the actual language.'
          })}>
              <span className="language">
                <img src={require('./assets/processingpython.png')} alt="PythonLogo" className="image" />
                Processing Python </span>                
                <span className="years">2017 - 2022</span>
          </Button3>

          <Button3 
          theme="orange"
          customStyles={{marginLeft: '0%',marginRight: '16vw',marginBottom: '0',}}
            onClick={() => openJobModal({
            company: 'GitHub',
            position: '',
            years: 'Since 2023',
            duties: '\n\nI have been using GitHub for around a year now. I began using it to transfer my code between my laptop and PC while in school and now use it almost daily.\n\nI also use GitHub within the Mac AI club to work on projects so I am used to pushing, pulling, and committing within a team repository.'
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
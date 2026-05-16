import { Container } from "./styles";
import ScrollAnimationImport from "react-animate-on-scroll";
const ScrollAnimation = ScrollAnimationImport as any;


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://bg-remover-three-theta.vercel.app/" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--green)" d="M 300 75 C 291.71875 75 285 81.71875 285 90 C 285 98.28125 291.71875 105 300 105 L 353.789062 105 L 229.394531 229.394531 C 223.535156 235.253906 223.535156 244.746094 229.394531 250.605469 C 232.328125 253.539062 236.160156 255 240 255 C 243.839844 255 247.671875 253.539062 250.605469 250.605469 L 375 126.210938 L 375 180 C 375 188.28125 381.71875 195 390 195 C 398.28125 195 405 188.28125 405 180 L 405 90 C 405 81.71875 398.28125 75 390 75 Z M 135 90 C 110.183594 90 90 110.183594 90 135 L 90 345 C 90 369.816406 110.183594 390 135 390 L 345 390 C 369.816406 390 390 369.816406 390 345 L 390 255 C 390 246.71875 383.28125 240 375 240 C 366.71875 240 360 246.71875 360 255 L 360 345 C 360 353.273438 353.273438 360 345 360 L 135 360 C 126.726562 360 120 353.273438 120 345 L 120 135 C 120 126.726562 126.726562 120 135 120 L 225 120 C 233.28125 120 240 113.28125 240 105 C 240 96.71875 233.28125 90 225 90 Z M 135 90 "/>
                  </svg>
                </a>
              </div>
            </header>
            <div className="body">
              <h3>bg.removal - AI Background Remover</h3>
              <p>
                Developed a web application for AI-powered background removal from images using React and Node.js. Integrated Clickdrop API for accurate image segmentation and implemented image upload, preview, and download features.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>Clerk</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://ai-resume-analyser-dgz8.onrender.com/" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--green)" d="M 300 75 C 291.71875 75 285 81.71875 285 90 C 285 98.28125 291.71875 105 300 105 L 353.789062 105 L 229.394531 229.394531 C 223.535156 235.253906 223.535156 244.746094 229.394531 250.605469 C 232.328125 253.539062 236.160156 255 240 255 C 243.839844 255 247.671875 253.539062 250.605469 250.605469 L 375 126.210938 L 375 180 C 375 188.28125 381.71875 195 390 195 C 398.28125 195 405 188.28125 405 180 L 405 90 C 405 81.71875 398.28125 75 390 75 Z M 135 90 C 110.183594 90 90 110.183594 90 135 L 90 345 C 90 369.816406 110.183594 390 135 390 L 345 390 C 369.816406 390 390 369.816406 390 345 L 390 255 C 390 246.71875 383.28125 240 375 240 C 366.71875 240 360 246.71875 360 255 L 360 345 C 360 353.273438 353.273438 360 345 360 L 135 360 C 126.726562 360 120 353.273438 120 345 L 120 135 C 120 126.726562 126.726562 120 135 120 L 225 120 C 233.28125 120 240 113.28125 240 105 C 240 96.71875 233.28125 90 225 90 Z M 135 90 "/>
                  </svg>
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CV Assessor - AI Resume Analyzer</h3>
              <p>
                Built an interactive Streamlit web application to analyze PDFs. Integrated Groq API with Llama 3.1-8B model for real-time AI-driven resume analysis and implemented secure PDF text extraction using PyPDF2.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Streamlit</li>
                <li>Groq API</li>
                <li>Llama 3.1</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://colab.research.google.com/drive/1sJcJTlwvASMNdzBi8f6ZJ7JQhvK6f-Au?usp=sharing" target="_blank" rel="noreferrer">
                  <svg width="20" height="20" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg">
                    <path fill="var(--green)" d="M 300 75 C 291.71875 75 285 81.71875 285 90 C 285 98.28125 291.71875 105 300 105 L 353.789062 105 L 229.394531 229.394531 C 223.535156 235.253906 223.535156 244.746094 229.394531 250.605469 C 232.328125 253.539062 236.160156 255 240 255 C 243.839844 255 247.671875 253.539062 250.605469 250.605469 L 375 126.210938 L 375 180 C 375 188.28125 381.71875 195 390 195 C 398.28125 195 405 188.28125 405 180 L 405 90 C 405 81.71875 398.28125 75 390 75 Z M 135 90 C 110.183594 90 90 110.183594 90 135 L 90 345 C 90 369.816406 110.183594 390 135 390 L 345 390 C 369.816406 390 390 369.816406 390 345 L 390 255 C 390 246.71875 383.28125 240 375 240 C 366.71875 240 360 246.71875 360 255 L 360 345 C 360 353.273438 353.273438 360 345 360 L 135 360 C 126.726562 360 120 353.273438 120 345 L 120 135 C 120 126.726562 126.726562 120 135 120 L 225 120 C 233.28125 120 240 113.28125 240 105 C 240 96.71875 233.28125 90 225 90 Z M 135 90 "/>
                  </svg>
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Study Mitra - Lecture Transcription & Translation</h3>
              <p>
                Lecture transcription via ASR using Fast Whisper. Translation into desired language with M2M100 Transformer. Summarization using Transformers Pipeline, hosted on Google Colab.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Fast Whisper</li>
                <li>M2M100</li>
                <li>Gradio</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
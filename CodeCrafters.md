<h1 align="center">
  <a href="https://github.com/CommunityOfCoders/Inheritance-2023">
    <img src="/Untitled.png" alt="CoC Inheritance 2022" width="500" height="166">
  </a>
  <br>
  Mental Health Navigator
</h1>

<div align="center">
   <strong>Mental Health Navigator</strong> - A mental wellness website focusing on self care and integrated chatbot<br>
  CoC Inheritance 2023 || CodeCrafters <br> <br>
</div>
<hr>

<details>
<summary>Table of Contents</summary>

- [Description](#description) 
- [Links](#links)  
- [Tech Stack](#tech-stack) 
- [Progress](#progress)
- [Future Scope](#future-scope)
- [Applications](#applications)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [Team Members](#team-members)
- [Mentors](#mentors)
- [Screenshots](#screenshots)

</details>

## 📝Description

Mental health problems are a major public health issue, affecting millions of people around the world. Many people with mental health problems do not seek help, due to stigma, fear, or lack of access to care.Mental health websites can play a vital role in providing information and support to people with mental health problems and their loved ones.The Website has following features

1. Health Chatbot: We have used LLama-2 model and fine tuned it with hugging face dataset.The model returns health advice according to user inputs (Hugging Face Dataset:https://huggingface.co/datasets/vibhorag101/phr_mental_therapy_dataset)

2. Login/Signup pages:user authentication is required to access features of this website.

3. Profile:Users can view and enter their profile details, such as their name, age, gender and write reviews. 

4. Journaling:A react based webpage which allows users to maintain a digital journal where they can record their thoughts, feelings, and experiences. Therapeutic practice that helps individuals process their emotions and track their mental health progress over time.

5. Habit Tracking:Users can create custom habits to track, such as exercise, meditation, medication adherence, sleep patterns, or social interactions. 

6. Personal stories:This section features real-life narratives and testimonials shared by individuals who have experienced mental health challenges, recovery journeys, or personal growth.


## 🔗Links

- [GitHub Repository](https://github.com/meggha/MentalHealthNavigator)
- [Drive Link to Screenshots of the project](https://drive.google.com/drive/folders/10GqGwYIkumCm5IIRo5NhHbTRG3F0QBzz?usp=drive_link)

## 🤖Tech-Stack

#### Front-end
- HTML
- CSS
- Bootstrap
- JavaScript
- ReactJS

#### Back-end
- ReactJS
- ExpressJS
- Mongoose
- Python
- Flask
- Flask , Flask_ngrok
- Ngrok

#### Database
- MongoDB

#### Natural language processing
- Transformers
- Accelerate 
- Peft
- Bitsandbytes
- Torch
- Langchain

## 📈Progress

- [x] Chatbot
- [x] Login-Signup and logout functionality
- [x] Journaling with update and delete functionality
- [x] Profile page displaying biodata
- [x] Fetch data using API
- [x] Personality Test
- [ ] Habit tracker 
- [ ] Personal stories

## 🔮Future Scope

- Nearby professional healthcare location
- Connecting to therapist as a middleware

## 💸Applications

We have combined multiple functionalities  into a single website with a user friendly chatbot. This website involves wellness features to help the users, a platform to connect, and a help-providing chatbot.

## 🛠Project Setup

Clone the repository:

Open a terminal window.

Bash
`git clone https://github.com/meggha/MentalHealthNavigator`

**Navigate to the project directory:**

In the terminal window, use the cd command to change directory to the folder where you cloned the repository. For example, if you cloned the repository into a folder named my-app, type:

Bash
`cd my-app`

**Install frontend dependencies:**

Navigate to the client directory within the project:

Bash
`cd client`

**Install the required frontend dependencies by running:**

Bash
`npm install`

**Install backend dependencies:**

Navigate back to the project root directory:

Bash
`cd ..`

**Go to the server directory:**

Bash
`cd server`

**Install the required backend dependencies by running:**

Bash
`npm install`

## 💻Usage

1. <h5>Open two terminal windows:</h5>
  In Windows, press Windows + R, type cmd, and press Enter.
  In macOS/Linux, open your preferred terminal application.

2. <h5>Navigate to the project directory:</h5>
  In both terminal windows, use the cd command to change directory to the root of your project folder. This folder should contain both client and server subdirectories.

3. <h5>Run the frontend:</h5>
  In one terminal window, type cd client and press Enter. This changes directory to the client subfolder.
  Then, type npm start and press Enter. This will start the frontend development server.

4. <h5>Run the backend:</h5>
  In the other terminal window, type cd server and press Enter. This changes directory to the server subfolder.
  Then, type npm run devStart and press Enter. This will start the backend development server.

5. <h5>For the chatbot</h5>
  - If you have GPU then make sure you have cuda installed and then run app.py
  - Or you can also run server.ipynb on colab. After running this you will get a link in the output. Make sure to replace the link in `client\src\bot\ActionProvider.jsx` line 12
5. <h5>Access the web app:</h5>
  Open a web browser.
  In the address bar, type http://localhost:3000. This opens the frontend app running on the development server.

Additional notes:

- The frontend app will automatically reload in the browser whenever you make changes to the code.
- You may see console messages related to the development process in both terminal windows.
- Remember to stop the servers (Ctrl+C in most terminals) when you're done to avoid resource usage.

## 👨‍💻Team Members

Add names of your team members with their emails and links to their GitHub accounts

- [Megha Wadher](https://github.com/meggha):  megha.wadher@gmail.com
- [Parth Belose](https://github.com/):  parthbelose2@gmail.com
- [Sushant Bagul](https://github.com/sushant607):  sushantbagul607@gmail.com
- [Pranjali Narote](https://github.com/JustPranjali):  pranjalinarote2@gmail.com

## 👨‍🏫Mentors

Add names of your mentors with their emails and links to their GitHub accounts

- [Pranav Janjani](https://github.com/pranavjanjani):  janjanipranav@gmail.com
- [Pranav Shukla](https://github.com/pranavshuklaa):  shuklapranav999@gmail.com

## 📱Screenshots
<img src="https://drive.google.com/uc?export=view&id=1BEJgTd98xm-YAjTFe6W4QC88nmD7eK16" alt="Home">

<img src="https://drive.google.com/uc?export=view&id=1tcQGdwFWx7M-LgxRpvsyhyLhsECov6RM" alt="Signup">

<img src="https://drive.google.com/uc?export=view&id=1XVG2y3aCOegt5QGl59Uszi3soQsPILfu" alt="Login">

<img src="https://drive.google.com/uc?export=view&id=1bAAdpz80hCTSlmmKBehywsu72xffVpDH" alt="Write Blog">

<img src="https://drive.google.com/uc?export=view&id=1bleZQqoPPNX1RcN0ZiBWQz5U12d2mvu4" alt="Show Blog">

<img src="https://drive.google.com/uc?export=view&id=1bti3KbEfTae6LzpFsd3gZ5OiCSOk6euF" alt="Update Blog">

<img src="https://drive.google.com/uc?export=view&id=1IceC3uqqVXbFBagLU49rbDS0upq95Jat" alt="Profile">
<img src="https://drive.google.com/uc?export=view&id=1C65ZcYSzPrAHCAdtHXz0P6ZAYt90LP-u" alt="Personal Stories">
<img src="https://drive.google.com/uc?export=view&id=1SCbz6TapFtv8t1F9te-LRf55VoxT3OrB" alt="Personality Test">
<img src="https://drive.google.com/uc?export=view&id=1r-rfchBQjEOKQQIvFSRbGLBg2QEiC3pj" alt="Chatbot">


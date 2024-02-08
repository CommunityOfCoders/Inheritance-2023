<h1 align="center">
  <a href="https://github.com/CommunityOfCoders/Inheritance-2023">
    <img src="https://github.com/nishitkekane/Inheritance-2023/blob/372b542936dd85f987ad292eacf6fe33ee19fb2d/Untitled.png" alt="CoC Inheritance 2022" width="500" height="166">
  </a>
  <br>
  <img src="https://github.com/kasodeep/inheritance-project/blob/main/logo.jpeg" alt="WHYT?" width="550" height="400">
</h1>

<div align="center">
   <strong>WHYT</strong> -The class topper's own notes taker<br>
  CoC Inheritance 2023 || HackElite <br> <br>
  Add any <a href="https://shields.io/">Shields</a> here
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
Our project is a comprehensive tool designed to benefit a wide range of users, including students, analysts, and anyone seeking efficient information retrieval. We have developed a YouTube video summarizer coupled with an important slides generator, packaged in the form of PDFs.

1.This feature enables users to extract key points and summaries from YouTube videos. It condenses lengthy videos into concise and easily digestible summaries.

2.Our tool automatically identifies significant slides within a presentation or lecture video. It extracts these slides and compiles them into a PDF document for easy reference.

3.Our integrated chatbot allows users to interact with the video content through questions and answers.Users can ask questions related to the video and receive responses based on the content discussed.

4.We've crafted our website with the MERN stack—MongoDB, Express.js, React, and Node.js—to seamlessly blend front-end and back-end elements. Our user interface, styled with Tailwind CSS, offers a sleek and contemporary appearance, enhancing user interaction.


## 🔗Links

- [GitHub Repository](https://github.com/kasodeep/inheritance-project)
- [Demo Video](https://drive.google.com/uc?id=1J53cTCYX3ZwBVqNyUflVwBTp-l1nMm0l&export=download)

<!-- Add any more links/resources you used for your project -->

## 🤖Tech-Stack

<!-- Mention all languages/libraries/frameworks used in your project **domain-wise**   
You can use icons too - find them [here](https://github.com/get-icon/geticon)  -->

#### Front-end
- ReactJS <img src="https://skillicons.dev/icons?i=react" height=20px />

- Taiwind CSS <img src="https://skillicons.dev/icons?i=tailwind"  height=20px/>

#### Back-end
- NodeJS <img src="https://skillicons.dev/icons?i=nodejs"  height=20px/>
- ExpressJS <img src="https://skillicons.dev/icons?i=expressjs"  height=20px/>

#### Database
- MongoDB <img src="https://skillicons.dev/icons?i=mongodb"  height=20px/>

### Python Libraries

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/073e4b5f-4202-415e-884b-fcd9438eda6e" alt="animated" height="100" width="200"  />
</p>

#### transformers
transformers is a python library that exposes an API to use many well-known transformer architectures, such as BERT, RoBERTa, GPT-2 or DistilBERT, that obtain state-of-the-art results on a variety of NLP tasks like text classification, information extraction, question answering, and text generation.

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/a47dac41-a897-4293-b815-f47f4cbf1024" alt="animated" height="100" width="200"  />
</p>

#### moviepy
moviepy is a Python library for video editing: cutting, concatenations, title insertions, video compositing (a.k.a. non-linear editing), video processing, and creation of custom effects.

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/ec52202b-8277-403a-b021-b2873e7a1738" alt="animated" height="100" width="200"  />
</p>

#### torch
torch is a machine learning library that can be used for video summarization and slide extraction.

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/ec304a9d-a804-4fb4-b683-70a86612cad6" alt="animated" height="200" width="200"  />
</p>

#### torchvision
torchvision is a library that can be used for video summarization and slide extraction.

#### imagehash
imagehash is a Python library that can be used to extract slides from a video.

#### FPDF
FPDF is a Python library that can be used to convert slides into a PDF.

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/11cf8afb-adda-4999-9b8d-ad74b8ea67a3" alt="animated" height="100" width="200"  />
</p>

#### langchains
langchains is a Python library that can be used to convert text into a summary.

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/d6719ed6-34f8-4a24-8bf1-89a86be92df6" alt="animated" height="100" width="200"  />
</p>

#### pytube
pytube is a Python library that can be used to extract video content from YouTube.

<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/911464c2-cb36-460c-9140-f8136db12e97" alt="animated" height="100" width="200"  />
</p>

#### flask
flask is a Python library that can be used to create a web application.


## 📈Progress

List down all the fully implemented features in your project

- [x] Summarization of YouTube videos (Summarizer)
Our tool can extract key points and summaries from YouTube videos. It condenses lengthy videos into concise and easily digestible summaries.
It is divided into 3 parts:
1. #### Video Download
    The user can input the URL of the video they want to summarize. The tool will then download the video from YouTube.
2. #### Text Extraction
    The tool will then extract the text from the video.
3. #### Summarization
    The tool will then summarize the text and display the summary to the user.

   - [x] Important Slides Generation (Slides Extractor)
Our tool automatically identifies significant slides within a presentation or lecture video. It extracts these slides and compiles them into a PDF document for easy reference.
It is divided into 3 parts:
1. #### Video Download
    The user can input the URL of the video they want to summarize. The tool will then download the video from YouTube.
2. #### Slide Extraction
    The tool will then extract the slides from the video.
3. #### Slide Classification
    The tool will then classify the slides and display the PDF to the user.
    ##### Basis of Classification
    - Slide with text
    - Slide with image
    - Slide with both text and image
    - Nth slide is not similar to the previous slide (N-1)th slide.

- [x] Chatbot Integration
Our integrated chatbot allows users to interact with the video content through questions and answers. Users can ask questions related to the video and receive responses based on the content discussed.

## 🔮Future Scope

- In our project, we aspire to expand functionality by not only allowing users to input playlist URLs but also providing comprehensive summaries and detailed notes for each playlist. This enhancement aims to offer users a deeper understanding of the content within the playlists, facilitating quicker navigation and comprehension 
- In addition to our current objectives, we are looking to implement a feature that generates graphs for each topic within a playlist. These graphs will visually represent the relationships, connections, and frequencies of topics present in the playlist content. By visualizing the structure of topics, users will gain a clearer understanding of the playlist's thematic landscape, allowing for easier navigation and comprehension. 

## 💸Applications

1)Educational Aid:
-Students: Helps students in quickly grasping key concepts from educational videos and lectures.
-Educators: Assists educators in creating concise summaries and slide decks for their teaching materials.

2)Professional Analysis and Research:
-Analysts and Researchers: Provides analysts and researchers with a tool for efficiently extracting insights and important information from lengthy videos, enhancing productivity in data analysis and research.

Application of Youtube URL - To - Summary and Screenshots PDF generation
1. Students can use this tool to summarize their lectures and create PDFs of important slides.
2. Analysts can use this tool to summarize important videos and create PDFs of important slides.
3. Anyone seeking efficient information retrieval can use this tool to summarize important videos and create PDFs of important slides.

Monetization Strategy
We can charge a fee for the use of our tool in the following ways:
1. We can charge a subscription fee for the use of our tool.
2. We can charge a fee for the use of our tool on a per-use basis.
3. We can charge a fee for the use of our tool on a per-video basis.

#### Advertising
1. We can display advertisements on our website.
2. We can display advertisements on our tool.
3. We can display advertisements on our PDFs.

## 🛠Project Setup

### Clone the repository
```bash
git clone https://github.com/kasodeep/inheritance-project.git
```


### Install the required packages
```bash
pip install -r requirements.txt

cd frontend
npm install

cd ..

cd backend
npm install
```

## 💻Usage

#### Run the following command to start the server
```bash
python app.py
```

#### Open new terminal and run the following command
```bash
cd backend
npm run dev
```

#### Open new terminal and run the following command
```bash
cd frontend
npm run dev
```

Congrats! You just started the project on your local machine.
go to http://localhost:5173/ to see the project live.


## 👨‍💻Team Members

- [Team Member 1 Nishit Kekane](https://github.com/nishitkekane): nishit.kekane04@gmail.com 
- [Team Member 2 Deep Kasodariya](https://github.com/kasodeep): dskasodariya_b22@it.vjti.ac.in
- [Team Member 3 Ayush Gulhane](https://github.com/AyuGul): asgulhane_b22@it.vjti.ac.in
- [Team Member 4 Aditya Yedurkar](https://github.com/aditya-y9): amyedurkar_b22@it.vjti.ac.in

  
## 👨‍🏫Mentors

Add names of your mentors with their emails and links to their GitHub accounts

- [Mentor 1 Anushree Dere](https://github.com/AnushreeDere): aadere_b21@it.vjti.ac.in
- [Mentor 2 Srushti](https://github.com/SrushtiGaidhane): srgaidhane_b21@it.vjti.ac.in
## 📱Screenshots



<p align="center">
<img src="https://github.com/Aditya-y9/WhyT/assets/122613756/ae8f1a21-4918-4719-9cb2-adc4aab92bd1" alt="animated" />
</p>

https://github.com/Aditya-y9/WhyT/assets/122613756/55d72bcf-ae90-4ca5-81b3-e2278527f783

![image](https://github.com/Aditya-y9/WhyT/assets/122613756/2bc59d1c-799d-4836-9127-ee3b97a32197)


![image](https://github.com/Aditya-y9/WhyT/assets/122613756/9efa9df6-b987-4bb9-8501-1fd9c223cc3b)






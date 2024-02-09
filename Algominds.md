<h1 align="center">
  <a href="https://github.com/CommunityOfCoders/Inheritance-2024">
    <img src="./Untitled.png" alt="CoC Inheritance 2024" width="500" height="166">
  </a>
  <br>
  Watch Harbour
</h1>

<div align="center">
   <strong>WatchHarbour</strong> -  WatchHarbour: A user friendly movie recommendation system where users can journal their binge routine and get the  best recommendations of movies to watch!<br>
  CoC Inheritance 2023 || AlgoMinds <br> <br>
</div>
<hr>

<details>
<summary>Table of Contents</summary>

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Progress](#progress)
- [Future Scope](#future-scope)
- [Project Setup](#project-setup)
- [Team Members](#team-members)
- [Mentors](#mentors)
- [Screenshots](#screenshots)

</details>

## 📝Description
 
WatchHarbour is a website where users can store the  movies they have  watched and review it with their fellow harbour members, and share a common forum to discuss about the movies. The movie recommendation system is used to show the most relevant movies to the user based on their binge history entries. WatchHarbour uses a cosine-similarity algorithm that analyzes the features and genres of movies along with its overview and cast, to generate a list of movies that match the user’s taste and mood based on their binge history. 

Users can also view movie details, trailers, reviews, and ratings from other users and sources. WatchHarbour aims to help users discover new and interesting movies, and enjoy a better movie-watching experience .

The cosine similarity method is used to map the movies on the vector 2D plane considering the proximity with its most relevant movies based on overview , ratings and cast.


 <img src="assets/cosine_similarity pic.png" alt="cosine similarity" width="500" height="300">

further we plan to implement content - based ML model to get more accurate and relevant movie/Tv shows' recommendations also considering other users' interest thus building a community platform and connecting people share similar interest on cinema.


<img src="assets/user_similarity pic.png" alt="user similarity" width="500" height="300">

# Features
---
- User Registration and Login
- User profile and Binge Journal 
- Movie Recommendation Engine based on cosine similarity 
- Movie browsing and the features and overview of the selected movie ( based on IMDB data)
- Movie trailers , reviews , blogs , and ratings 
- User dashboard and upcoming BingeBuddy social media feature.

## 🔗Links

- [GitHub Repository](https://github.com/adityavivekanand/Watch-Harbour)
- [Demo Video](assets/Screencast from 09-02-24 12_33_47 PM IST.webm)
- [Hosted Website Link](https://green-worlds-grin.loca.lt/)
- [App APK Link](https://green-worlds-grin.loca.lt/)
- [Hosted Backend Link](https://green-worlds-grin.loca.lt/)

## 🤖Tech-Stack
#### Front-end
- HTML
- CSS
#### Back-end
- Flask
- Streamlit API
#### Database
- SQL Alchemy 
#### ML
- pandas 
- scikit-learn

## 📈Progress

 fully implemented features 

- [x] Dashboard and movies list  
- [x] individual movie recommendations
- [x]  Reviews and discussion forum 

## 🔮Future Scope

- BingeBuddy ( social media platform)
- TV shows and recommendations for different OTTs 
-  Train the model with latest dataset using content based recommendation system.
- Add sentimental analysis to the binge journal to create a flashcard of users' binge history.

## 🛠Project Setup

- clone the repository or download the zipfile
- Install the required packages using `pip install -r requirements.txt `or install them individually on your pc terminal.
- Run `python run app.py `command to launch the web server.
- Open the `https://green-worlds-grin.loca.lt/` on your browser to  access the Streamlit application

## 👨‍💻Team Members

- [Abhinav Ananthu](https://github.com/Herculox)
- [Aditya Vivekanand](https://github.com/adityavivekanand)
- [Aditi Dhumal](https://github.com/aditidhu)
- [Anoushka Ruikar](https://github.com/Anoushka1009)

## 👨‍🏫Mentors

- [Raunak Singh Kalsi](https://github.com/):
- [Kedar Dhamankar](https://github.com/): 

## 📱Screenshots

  <img src= "assets/WhatsApp Image 2024-02-09 at 13.47.21_effbaf8e.jpg" alt="DASHBOARD" width="1000" height="500">


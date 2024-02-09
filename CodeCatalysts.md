<h1 gn="center"><span style="blue">UniHub</span>: Elevating Student Engagement and Collaboration</h1>


<p align="center">
  <img src="https://i.ibb.co/DD7Ndp6/unihub.png" alt="unihub">
</p>

<div align="center">
   <strong>UniHub</strong> - Elevating Student Engagement and Collaboration<br>
  CoC Inheritance 2023 || CodeCatalysts <br> <br>
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
- [Screenshots](#screenshots)
- [Mentors](#mentors)

</details>

## 📝Description

UniHub is more than just a platform; it's a community-driven ecosystem that empowers students to connect, collaborate, and excel academically. By seamlessly integrating social and academic features, UniHub creates a holistic environment that supports students throughout their educational journey, fostering a sense of belonging and shared learning experiences.

1. Social Networking for Students

    Unishare redefines social networking for students, providing a dedicated space to create profiles, connect with peers, and cultivate a virtual community. From     sharing updates on academic achievements to posting snapshots of campus life, Unishare creates a vibrant online environment.

2. Messaging System

    The robust messaging system ensures seamless communication among students. Whether coordinating study sessions or engaging in discussions on coursework, the       real-time messaging feature enhances collaboration and connectivity.

3. Resource Sharing

    Facilitating knowledge exchange, Unishare includes a resource-sharing feature. Students can upload and download a diverse array of academic materials,             including textbooks, lecture notes, and study guides. This fosters a culture of collaboration and shared learning resources.

4. Blogs

     Allows students to seamlessly upload and share their blogs, fostering a vibrant community where knowledge exchange and creativity thrive. With this   
     functionality, students can showcase their insights, experiences, and expertise, contributing to a dynamic and enriching online platform.

6. Pointer Calculator 

    UniHub incorporates a user-friendly pointer calculator, enabling students to track their academic performance effortlessly. This tool provides insights into       grades and credits, empowering students to make informed decisions about their academic journey.

7. Vivabot

    The Vivabot feature acts as a virtual practice partner for vivas and interviews. Through simulated conversations, students can refine their interview skills,      build confidence, and prepare thoroughly for academic assessments.

8. Lost and Found

    Lost and Found feature, simplifies the process of reporting lost items and aiding in their recovery within the academic community. Users can effortlessly          submit details about lost items, while those who find them can quickly log them into the system, streamlining the search and retrieval process. This feature       not only enhances campus safety but also fosters a sense of community by facilitating the return of lost belongings, promoting goodwill and cooperation among      students, faculty, and staff.

9. Events Tracker

    Stay connected with campus life through the Events Tracker. From academic seminars to cultural festivals and sports events, students can explore and     
    participate in various activities, contributing to a holistic college experience.

## 🔗Links

- [GitHub Repository](https://github.com/SharanRP/Unishare_Campus)
- [Demo Video](https://github.com/SharanRP/Unishare_Campus/assets/136159249/9695b73d-3f7b-46e8-898b-c2392381434e)
- [Screenshots of our project](https://drive.google.com/drive/u/0/folders/1RxFUxI9_3M9gTJIQuU6pPJSteH_EVnKO)

## 🤖Tech-Stack

UniHub is built using the following technologies:
<div align="center">
  
| ![HTML](https://img.icons8.com/color/36/000000/html-5--v1.png) <div> HTML </div> | ![CSS](https://img.icons8.com/color/36/000000/css3.png)<div> CSS </div>| ![JavaScript](https://img.icons8.com/color/36/000000/javascript--v1.png)<div> JavaScript </div> | ![React](https://img.icons8.com/color/36/000000/react-native.png)<div> React </div> |
| --- | --- | --- | --- |

| ![Material UI](https://img.icons8.com/color/36/000000/material-ui.png)<div> Material UI</div> | ![Chakra UI](https://img.icons8.com/color/36/000000/chakra-ui.png)<div> Chakra UI</div> | ![Node.js](https://img.icons8.com/color/36/000000/nodejs.png) <div> Node.js </div> | ![Express.js](https://img.icons8.com/color/36/000000/express.png) <div>Express.js</div> |
| --- | --- | --- | --- |

| ![Flask](https://img.icons8.com/fluent/36/000000/flask.png)<div> Flask </div>| ![MongoDB](https://img.icons8.com/color/36/000000/mongodb.png)<div> MongoDB </div>| ![Python](https://img.icons8.com/color/36/000000/python--v2.png)<div> Python </div>| ![PyTorch](https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg)<div> PyTorch </div>|
| --- | --- | --- | --- |

</div>

## 📈Progress

- [x] Community
- [x] Blogs
- [x] Lost & Found
- [x] College Map 
- [x] PYQ Papers
- [x] Pointer Calculator 

- [ ] Viva Bot 
- [ ] Counselling Bot

## 🔮Future Scope

- Live Location in Map
- Extend access to all the Universities across the globe

## 💸Applications

   UniHub revolutionizes university life by providing a unified online platform where students can seamlessly connect, collaborate, and thrive     
   academically.Through  features like social networking, messaging, resource sharing, blogs, and event tracking, UniHub fosters a vibrant community while   
   enhancing academic success. From sharing achievements to accessing study materials and staying informed about campus events, UniHub simplifies and enriches the    student  experience, making university life more engaging and fulfilling for all.

## 💻Usage

To get started with **UniHub**, follow these steps:

**Clone the repository:**
  ```bash
    git clone https://github.com/unihub-project/Unishare_Campus.git
```

  ```bash
    cd './frontend/'
```
  ```bash
    npm i
```

  ```bash
    npm run dev```
```

   ```bash
     cd './backend'
```

  ```bash
    npm i
```

   ```bash
     node server.js
```

   ```bash
     cd ./
```

   ```bash
     python app.py
```


**Setup MongoDB URI**

a. **Access MongoDB Atlas:** Go to the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website and sign in to your account (or create a new one if you haven't already).

b. **Create a New Cluster:** If you don't have a cluster already, create a new one by following the prompts. Make sure to choose the appropriate settings for your needs.

c. **Whitelist IP Addresses:** In the MongoDB Atlas dashboard, navigate to "Network Access" and add your IP address to the whitelist. This allows your applications to connect to the cluster.

d. **Create a Database User:** Go to "Database Access" in the dashboard and create a new database user with appropriate permissions for your application.

e. **Get Connection String (URI):** Go back to the main dashboard and click on "Connect" for your cluster. Choose "Connect your application" and copy the connection string (URI) provided.

f. **Replace Placeholder Values:** Replace the placeholder values in the connection string with your actual database user credentials, database name, and any other options you need.

Example MongoDB URI:

```plaintext
mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```

## 👨‍💻Team Members

<div align="center">
  
| [![tanmay](https://api.multiavatar.com/tanmay.svg)](https://github.com/tanmaymene21) Tanmay | [![mayank](https://api.multiavatar.com/mayanklegend.svg)](https://github.com/MayankPalan2004) Mayank | [![bhargav](https://api.multiavatar.com/ac.svg)](https://github.com/bhargav2402) Bhargav | [![sharan](https://api.multiavatar.com/zephyrusS.svg)](https://github.com/SharanRP) Sharan |
| --- | --- | --- | --- |


</div>

## 📱Screenshots
<img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/d7f68250-8e23-4312-82f9-062857a85dc3" alt="Landingpage"/> 
<br>
<table>
  <tr>
    <td> <img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/6bc9860a-4970-44b3-a83e-5bb18071a0b9" alt="Papers" "/> </td>
    <td> <img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/bfb53ea4-a4a5-403e-b399-5e926ab9238f" alt="Blog" "/> </td>
  </tr>
  <br>
  <tr>
    <td> <img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/e9afaee0-6490-4fb1-ab1e-f8115055af1e" alt="Lost and Found"/> </td>
    <td> <img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/d7ea7661-5505-45bd-bcaa-678bb139261f" alt="Features" /> </td>
  </tr>
  <tr>
    <td> <img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/3a51d982-4412-4cbe-a244-aabd49505842" alt="Events" /> </td>
    <td> <img src="https://github.com/SharanRP/Unishare_Campus/assets/136159249/a07b7f1c-58e7-4769-afdf-e1ed7c9e0a31" alt="Community" /> </td>
  </tr>
</table>

## 👨‍🏫Mentors

- [Raunak Singh Kalsi](https://github.com/)
- [Rucha Patil](https://github.com/)

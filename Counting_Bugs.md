
# counting_lives
### Description 
The Doctor Appointment App is a super handy mobile app that lets you easily schedule appointments with healthcare professionals. It's all about making your life easier when it comes to finding and booking appointments with doctors, specialists, and other healthcare providers. You can search for healthcare providers based on their location, specialty, and availability. Once you find a suitable provider, you can check out their profile, which includes their name, photo, contact info, specialization, education, certifications, years of experience, and even the languages they speak. With just a few taps, you can secure your appointment and have peace of mind knowing that you're all set to see the right healthcare professional. It's like having a personal assistant for your medical needs right in your pocket!

### Features
**1. Search and Book Appointments:**
   - Users can search for healthcare providers based on location, specialty, and availability.
   - The app displays a list of doctors, clinics, and hospitalsalong with their available time slots.
   - Users can select a suitable time slot and book appointments with a few taps.

**2. Healthcare Provider Profiles:**
   - Each healthcare provider has a detailed profile that includes:
     - Name, photo, and contact information.
     - Specialization and sub-specializations (e.g., Cardiologist, Pediatrician, Dermatologist).
     - Education and degree qualifications (e.g., MD, DO, MBBS).
     - Board certifications and affiliations.
     - Years of experience.
     - Languages spoken.
     - Reviews and ratings from previous patients.

**3. Facility Information:**
   - The app provides information about the healthcare facilities where appointments are offered.
   - Details about the clinic or hospital's address, contact number, and hours of operation.
   - Information about services offered, such as diagnostic tests, procedures, and available equipment.

**4. Appointment Reminders:**
   - Users receive appointment reminders via notifications or email to ensure they don't miss their scheduled visits.

**5. Telemedicine Options:**
   - Some apps may offer telemedicine or video consultation options, allowing users to consult with healthcare providers remotely.

**6. Insurance and Payment Information:**
   - Users can check if the healthcare provider accepts their insurance plan and view estimated costs for services.
**7. User Reviews and Ratings:**
   - Patients can leave reviews and ratings based on their experiences, helping others make informed choices.

**8. Emergency Contacts:**
   - In case of emergencies, the app may provide a list of nearby hospitals and emergency numbers.

Overall, a doctor appointment app serves as a one-stop solution for individuals seeking medical care. It not only simplifies the appointment booking process but also provides essential information about healthcare providers, facilities, and services, making it easier for users to make informed decisions about their healthcare.

### Links

- https://github.com/Shreyash16b/Counting_Lives.git
- https://www.figma.com/file/7CcAPTvrPWjJUjCUfoHSdS/Doctor-App-v1.0?type=design&node-id=3%3A1002&mode=design&t=aF1VZ0cowwDAu5DU-1
- https://drive.google.com/drive/folders/1_wXMw46l5dlIcmPga1BUF2haienR2t66?usp=drive_link
### Tech-Stack

- get - State management
  https://pub.dev/packages/get
- connectivity_plus - For status of network connectivity
  https://pub.dev/packages/connectivity_plus
- shared_preferences - Provide persistent storage for simple data
  https://pub.dev/packages/shared_preferences
- cached_network_image - For storing internet image into cache
  https://pub.dev/packages/cached_network_image

### Front-end
- Flutter
- Dart
### Back-end
- Dart
### Database
- Firebase firestore
### Progress
**Fully Implemented Features**

**Partially Implemented Features**

### Future Scope 

- **Telemedicine Integration:** Incorporate telemedicine features to facilitate remote consultations with healthcare professionals, expanding access to healthcare services beyond traditional in-person visits.

- **AI-driven Assistance:** Implement AI-powered chatbots to provide instant support for medical queries, streamline appointment booking, and offer personalized recommendations based on user data and preferences.

- **Wearable Device Integration:** Partner with wearable device manufacturers to enable seamless integration, allowing users to track health metrics and share data with healthcare providers for more personalized care and monitoring.

- **Enhanced Data Security:** Strengthen data security measures to ensure the protection of sensitive user information, complying with healthcare regulations such as HIPAA to maintain user trust and confidentiality.

- **Global Expansion:** Adapt the app to support multiple languages and healthcare systems, facilitating its expansion into new markets and catering to diverse user demographics worldwide.

- **Usability Improvements:** Continuously refine the app's user interface and experience based on user feedback and usability testing, ensuring ease of use and accessibility for all users.

- **Partnerships and Collaborations:** Forge partnerships with healthcare providers, insurance companies, and other stakeholders to expand service offerings, improve interoperability, and enhance the overall value proposition for users.

- **Predictive Analytics:** Implement predictive analytics capabilities to identify trends, anticipate patient needs, and optimize appointment scheduling and resource allocation for healthcare providers.

- **Health Monitoring Features:** Introduce features for users to track their health metrics, monitor medication adherence, and receive personalized health recommendations, promoting proactive healthcare management.

- **Continuous Innovation:** Stay abreast of technological advancements and industry trends to drive ongoing innovation and maintain a competitive edge in the rapidly evolving digital healthcare landscape.
### Applications
> To facilitate easy communication between Patient, Hospital and Doctor.
> Enables to patients to book appointment whenever comfortable without much concern about the queue.
### Project Setup
**Requirements:**
- Any Operating System (e.g., MacOS X, Linux, Windows)
- Any IDE with Flutter SDK installed (e.g., IntelliJ, Android Studio, VSCode, etc.)
- A little knowledge of Dart and Flutter
- 1 GB storage

**Setup:**
- Clone the GitHub repository into your local device.
- Open the project folder in your preferred IDE with Flutter SDK installed (e.g., IntelliJ, Android Studio, VSCode, etc.).
- Install all the required packages by running flutter pub get from the terminal/command prompt.
- *Set up Firebase for authentication and database:*
   Go to the Firebase Console (console.firebase.google.com).
   Create a new project or select an existing one.
   Follow the instructions to add Firebase to your Flutter project. This usually involves adding a configuration file to your project.
   Enable Google Sign-In authentication method in Firebase Authentication.
   In Firestore or Realtime Database, create collections/documents to store appointment data.
- *Implement authentication with Google Sign-In:*
   Add necessary code to allow users to sign in using their Google accounts.
   Ensure to handle authentication states properly within the app.
- *Design and implement the doctor appointment booking system:*
   Create screens/pages for users to view available appointments, book appointments, view their booked appointments, etc.
   Implement functionality to display available appointment slots, book appointments, and manage booked appointments.
- *Integrate Firebase Firestore/Realtime Database:*
   Use Firebase to store and retrieve appointment data, such as available slots, booked appointments, etc.
- *Test the application:*
   Test various scenarios to ensure the app behaves as expected, including authentication flows, appointment booking, etc.
- **Deployment:**
    Once testing is successful, you can deploy the app to your preferred platform (e.g., Google Play Store, Apple App Store, etc.).
- **Collaboration:**
   If you want to collaborate, reach out to the project owner or contact the designated person for collaboration details.
   Feel free to customize the project further based on your specific requirements and design preferences.
### Usage

1. **Clone Repository:** Open your terminal/command prompt and use the `git clone` command followed by the repository's URL to clone the project onto your local device.

2. **Open Project in IDE:** Launch your preferred IDE (e.g., IntelliJ, Android Studio, VSCode) and open the project folder.

3. **Install Required Packages:** Navigate to the project directory in your terminal/command prompt and run `flutter pub get` to install all the necessary packages.

4. **Set up Firebase:** Go to the Firebase Console and create a new project or select an existing one. Follow the instructions to add Firebase to your Flutter project by adding the generated configuration file.

5. **Enable Google Sign-In:** In the Firebase Authentication section, enable Google Sign-In as an authentication method.

6. **Set up Firestore/Realtime Database:** Create collections/documents in Firestore or Realtime Database to store appointment data such as available slots and booked appointments.

7. **Implement Authentication:** Add code to your Flutter project to allow users to sign in using their Google accounts and handle authentication states properly.

8. **Design and Implement Appointment Booking System:** Create UI screens/pages for users to view and book appointments. Implement functionality to display available slots, book appointments, and manage booked appointments.

9. **Integrate Firebase Database:** Use Firebase APIs to store and retrieve appointment data from Firestore or Realtime Database.

10. **Test the Application:** Thoroughly test the app to ensure all features work as expected, including authentication flows and appointment booking functionality.

11. **Deployment:** Once testing is successful, deploy the app to your preferred platform such as the Google Play Store or Apple App Store.

12. **Collaboration:** If you wish to collaborate on the project, reach out to the project owner or designated collaborators for further details.

### Team Members

- Shreyash Borde : shreyashborde@gmail.com
- Areeb Kounchali : aahkounchali_b22@ce.vjti.ac.in
- Sayali Khandare : sckhandare_b22@it.vjti.ac.in

### Mentors
- Rushi Jani : rvjani22@gmail.com
- Akshay Potkhule : akshaypotkhule123@gmail.com

### Screenshots
![WhatsApp Image 2024-02-08 at 23 50 10_22f741e7](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/1c2b7ccb-ce73-4939-8aca-f335207c81f2)
![WhatsApp Image 2024-02-08 at 23 50 10_7963bb72](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/5cfa68cc-cc4a-4e96-9b95-21c03562e6ea)
![WhatsApp Image 2024-02-08 at 23 50 10_c6ddfedd](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/750f33c8-421e-4df1-8eaa-ce1bcf8236a7)
![WhatsApp Image 2024-02-08 at 23 50 10_7f7ce7cc](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/3ca938d7-2f99-4871-83c8-e101465b0a7e)
![WhatsApp Image 2024-02-08 at 23 50 11_7639f46d](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/a0835e87-23f1-4de2-8a4e-73cb9280dac3)
![WhatsApp Image 2024-02-08 at 23 50 11_168a2ba7](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/c2d87578-b44f-4134-bdcf-22a5b889cd66)
![WhatsApp Image 2024-02-08 at 23 50 11_b85853a3](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/2fc2e1f1-4885-4e86-a160-30039d8c4b6d)
![WhatsApp Image 2024-02-08 at 23 54 36_abcf6383](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/5cd2428f-671a-4e04-bfee-26217c2de7ec)
![WhatsApp Image 2024-02-08 at 23 57 59_7e3c4a70](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/f2e4b53f-362e-4517-ac3d-a4ee39a79afe)
![WhatsApp Image 2024-02-08 at 23 57 59_b5fd5fa7](https://github.com/Shreyash16b/Counting_Lives/assets/148917798/f93cc5af-7c71-43db-b007-e09a2199b5cf)


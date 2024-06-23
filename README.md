# Visounday Client

## Topics
- Public URL Access 
- Technology Stack Used
- Screenshots
- How to Run the Application


### Public URL Access

[https://visounday-ai.azurewebsites.net](https://visounday-ai.azurewebsites.net)

### Technology Stack Used 

| No  | Tech Stack / Package |
|-----|----------------------|
| 1.  | React                |
| 2.  | React Router         |
| 3.  | Vite                 |
| 4.  | Tailwind & Flowbite  |
| 5.  | React Markdown       |
| 6.  | Cloudinary           |
| 7.  | Axios                |
| 8.  | Sweetalert2          |

> For more detail check it on package.json

### Screenshots 

- Landing Page 
![landingPage](./screenshots/landingPage.webp)
- Use Case Page 
![useCasePage](./screenshots/useCasePage.webp) 
- Terms & Conditions Page
![tnc](./screenshots/tnc.webp)
- Dashboard Page 
![dashboard](./screenshots/dashboard.webp)
- Chat Page 
![chat](./screenshots/chat.webp)
- Video Indexer Enhancer Page
![video](./screenshots/enhancer.webp)
- Not Found Page
![notfound](./screenshots/notfoundPage.webp)

### How to Run the Application

> Note: You will be unable to run this application unless you have Cloudinary and Microsoft authentication via Firebase. You must modify the code that interacts with the API as necessary.

**Check Dockerfile or run this way and .yml :**

1. Git clone this repository 
2. Open terminal 
3. Navigate to this repository 
4. Create file .env and take a list of .env on `.env.template` 
```
VITE_FIREBASE_APIKEY=
VITE_FIREBASE_AUTHDOMAIN=
VITE_FIREBASE_PROJECTID=
VITE_FIREBASE_APPID=
VITE_FIREBASE_MEASUREMENTID=
VITE_CLOUDINARY_CLOUD=
VITE_CLOUDINARY_APIKEY=
VITE_CLOUDINARY_UPLOADPRESET=
```
5. Install the package 
```
npm install 
```
6. Run application
```
npm run dev
```
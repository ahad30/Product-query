### Akeneo Product Query - Project Setup Guide

**Website Name:** Akeneo Product Query  
**Live Link:** [Akeneo Product Query](https://assignment-11-ahad.netlify.app/)

---

### 🛠️ Technical Stack:

- **Frontend:** React, React Router
- **Backend:** Node.js, Express, MongoDB
- **Authentication:** Firebase, JWT
- **Additional Libraries:**
  - Tanstack Query for data fetching
  - React-Select for multi-select dropdowns
  - Imgbb/Cloudinary for image uploads
  - React-Google-Charts for dynamic charts

**Packages:**

1. **React-Tooltip:** [React Tooltip Documentation](https://react-tooltip.com/)
2. **Swiper (Slider):** [Swiper Documentation](https://swiperjs.com/)
3. **React-Simple-Typewriter:** [React Simple Typewriter Documentation](https://www.npmjs.com/package/react-simple-typewriter)
4. **Meraki UI:** [Meraki UI Documentation](https://merakiui.com/)

---

### Features:

1. **Comprehensive Search:** Robust search functionality for products by name, category, brand, or keywords.
2. **Detailed Product Information:** Listings with specifications, features, pricing, availability, and user reviews.
3. **Comparison Tools:** Tools to compare multiple products side by side.
4. **User Feedback and Reviews:** User-generated content such as reviews, ratings, and comments.
5. **Customer Support:** Accessible support channels like live chat, email, or FAQs.
6. **Personalization Features:** Personalized recommendations based on user preferences, browsing history, and past purchases.

---

### 🚀 Project Setup Instructions

Follow these steps to set up the project locally:

#### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Download MongoDB](https://www.mongodb.com/try/download/community)
- **Firebase Account**: [Create Firebase Account](https://firebase.google.com/)
- **Cloudinary/Imgbb Account**: [Create Cloudinary Account](https://cloudinary.com/) or [Create Imgbb Account](https://imgbb.com/)

#### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/akeneo-product-query.git
cd akeneo-product-query
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
# Backend
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# Firebase
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id

# Image Uploads
IMGBB_API_KEY=your_imgbb_api_key
CLOUDINARY_URL=your_cloudinary_url
```

#### 4. Start the Backend Server

Navigate to the `backend` directory and start the server:

```bash
cd backend
npm install
npm start
```

#### 5. Start the Frontend Server

Navigate back to the root directory and start the frontend server:

```bash
npm start
```

#### 6. Access the Application

Open your browser and go to `http://localhost:3000` to access the application.


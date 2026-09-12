# InterviewIQ.AI 🤖

> AI-powered mock interview platform for practicing interviews, improving confidence, and preparing for real-world hiring rounds.

## 🌐 Live Demo

[Visit InterviewIQ.AI](https://interview-ai-2-nrc5.onrender.com/ye)

## 📌 Overview

**InterviewIQ.AI** is an AI-powered interview practice platform that simulates an interview experience through an interactive web interface.

Users can start mock interviews, answer interview questions using text or voice input, track their interview progress, and access account-related features such as interview history and credits. The application also includes a payment flow powered by Razorpay.

## ✨ Features

- AI-powered mock interview experience
- Role-based interview practice
- Interactive interview interface
- Text-based answer submission
- Voice input support
- Interview countdown timer
- Question progress tracking
- Interview status indicator
- User account and authentication
- User profile and credit balance
- Interview history
- Resume/PDF upload and processing support
- Payment integration using Razorpay
- Card, netbanking, and wallet payment options
- Secure cookie-based request support
- CORS configuration for frontend-backend communication

## 🖥️ Screenshots

### Landing Page

The landing page introduces InterviewIQ.AI and provides options to start an interview or view interview history.

### AI Interview Screen

The interview screen includes:

- AI interviewer visual
- Greeting message
- Interview status
- Countdown timer
- Current question and total question count
- Text answer area
- Microphone button for voice input
- Submit Answer button

### Payment Screen

The payment interface includes:

- Price summary
- Card payment
- Netbanking
- Wallet payment
- Add-new-card form
- RBI guideline consent checkbox

## 🚀 How It Works

1. Open the InterviewIQ.AI website.
2. Sign in or create an account.
3. Start a mock interview.
4. Select or configure the interview as required.
5. Read or listen to the AI-generated question.
6. Answer using text or voice input.
7. Submit the answer.
8. Continue through the interview questions.
9. Review interview history or available results.

## 🛠️ Tech Stack

### Backend

The backend is built with Node.js and Express using ES Modules.

| Technology / Package | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express 5 | Backend web framework |
| MongoDB | Database |
| Mongoose 9 | MongoDB object modeling |
| Axios | HTTP requests and API communication |
| JSON Web Token | Authentication token handling |
| Cookie Parser | Cookie parsing |
| CORS | Cross-origin request configuration |
| dotenv | Environment variable management |
| Multer | File uploads |
| PDF.js | PDF processing |
| Razorpay | Payment integration |
| Crypto | Cryptographic utilities |
| Nodemon | Development server auto-restart |

### Frontend

> Add the exact frontend framework and dependencies after sharing the frontend `package.json`.

### Deployment

- **Render** — Live deployment platform

## 📡 Backend API Routes

The Express server registers the following route groups:

| Base Route | Purpose |
|---|---|
| `/api/auth` | Authentication and account-related operations |
| `/api/user` | User-related operations |
| `/api/interview` | Interview-related operations |
| `/api/payment` | Payment-related operations |

> The exact HTTP methods and endpoints inside each router depend on the route files. Add them here when documenting the individual route definitions.

## 🔐 Backend Configuration

The backend uses:

- `dotenv` to load environment variables
- `express.json()` to parse JSON request bodies
- `cookie-parser` to read cookies
- `cors()` with credentials enabled
- MongoDB connection through `connectDb()`
- A configurable server port through `process.env.PORT`

### CORS Configuration

The backend currently allows requests from:

```text
https://interview-ai-2-nrc5.onrender.com
```

Credentials are enabled so that cookie-based authentication can work between the frontend and backend.

## 📂 Project Structure

```text
InterviewIQ.AI/
├── client/                      # Frontend application
├── server/
│   ├── config/
│   │   └── connectDb.js         # Database connection
│   ├── routes/
│   │   ├── auth.route.js        # Authentication routes
│   │   ├── user.route.js        # User routes
│   │   ├── interview.route.js   # Interview routes
│   │   └── payment.route.js     # Payment routes
│   ├── index.js                 # Express server entry point
│   ├── package.json
│   └── ...
├── .env.example
└── README.md
```

> Add controllers, models, middleware, services, and upload folders if they exist in your repository.

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd <your-project-folder>
```

### 2. Install backend dependencies

```bash
cd server
npm install
```

### 3. Configure environment variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=6000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
AI_API_KEY=your_ai_api_key
CLIENT_URL=https://interview-ai-2-nrc5.onrender.com
```

> These are example variable names. Use the exact names referenced in your backend source code.

### 4. Run the backend in development

```bash
npm run dev
```

The configured development script runs:

```bash
nodemon index.js
```

The server uses the following port logic:

```js
const PORT = process.env.PORT || 6000;
```

### 5. Run the frontend

> Add the frontend installation and start command here after confirming the frontend framework and scripts.

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Port used by the Express server; defaults to `6000` |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Secret used for JWT authentication |
| `RAZORPAY_KEY_ID` | Razorpay public key |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key |
| `AI_API_KEY` | API key for the AI service |
| `CLIENT_URL` | Frontend URL used for CORS configuration |

> Remove unused variables and replace placeholders with the exact configuration used by your project. Never commit `.env` files or secret keys to GitHub.

## 💳 Payment Integration

The application includes a payment interface with:

- Card payments
- Netbanking
- Wallet payments
- New card entry
- RBI guideline consent checkbox

The backend includes the `razorpay` package for payment gateway integration.

For production, payment credentials and payment verification logic should remain on the server side.

## 📄 Resume and PDF Processing

The backend includes:

- `multer` for handling file uploads
- `pdfjs-dist` for PDF processing

These dependencies can support resume upload and PDF text extraction workflows, depending on the implemented controllers and routes.

## 🤖 AI Interview Experience

InterviewIQ.AI combines:

- AI-led interview questions
- Timed responses
- Text and voice interaction
- Question progress tracking
- A focused interview-style interface
- Interview history and account features

## 📈 Future Enhancements

- Detailed performance reports
- AI-generated feedback and improvement tips
- Resume-based interview questions
- Multiple interview categories
- Difficulty selection
- Coding interview mode
- HR and behavioral interview mode
- Interview analytics dashboard
- Downloadable interview reports
- More payment and subscription plans

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -m "Add your feature"
   ```

5. Push your branch:

   ```bash
   git push origin feature/your-feature
   ```

6. Open a Pull Request.

## 📄 License

This project currently uses the **ISC** license as specified in the backend `package.json`.

## 👨‍💻 Author

**Abhishek Kumar**

- GitHub: `<your-github-profile-url>`
- Portfolio: `<your-portfolio-url>`
- LinkedIn: `<your-linkedin-profile-url>`

---

⭐ If you find InterviewIQ.AI useful, consider giving the repository a star!

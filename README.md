# 🐱 HNG Profile API — Node.js + Express

A simple Express API that returns developer profile data along with a random cat fact. Built for the HNG internship project.

---

## 📦 Features

- ✅ `/me` route returns:
  - User name, email, and stack (from `.env`)
  - Random cat fact (via [catfact.ninja](https://catfact.ninja))
  - Current timestamp
- 🔒 Uses environment variables for sensitive data
- 🌐 Built with Express.js and Axios
- ⚡ Lightweight, deployable to Railway, Render, etc.

---

## 📂 Project Structure

firstproj/
├── controller/
│ └── profileController.js # Contains the getProfile logic
├── routes/
│ └── profileRoute.js # API route definition
├── index.js # App entry point
├── .env # Environment variables (not committed)
└── README.md # You're here

yaml
Copy code

---

## 🔧 Environment Variables

Create a `.env` file in the project root and define:

```env
USER_NAME=Caleb Adebayo
USER_EMAIL=caleb@example.com
USER_STACK=Frontend Developer
PORT=4000
⚠️ Do not commit .env to Git. Add it to .gitignore.

🚀 Running the Project Locally
bash
Copy code
# 1. Clone the repo
git clone https://github.com/your-username/hng-profile-api.git
cd hng-profile-api

# 2. Install dependencies
npm install

# 3. Add your .env file
touch .env
# (paste your env values here)

# 4. Start the server
npm start
The server will start on http://localhost:4000 (or the PORT you set).

🌐 API Endpoint
GET /me
Returns a JSON response with your profile and a cat fact.

Example Response:
json
Copy code
{
  "status": "success",
  "user": {
    "email": "caleb@example.com",
    "name": "Caleb Adebayo",
    "stack": "Frontend Developer"
  },
  "timestamp": "2025-10-17T12:00:00.000Z",
  "fact": "Cats have five toes on their front paws, but only four on the back ones."
}
📡 Deployment
You can deploy this project on:

Railway

Render

Vercel (API route)

Ensure environment variables are configured in the deployment dashboard.

🧪 Example Curl Test
bash
Copy code
curl https://your-app.up.railway.app/me
📜 License
MIT — feel free to use, modify, and share.

👨‍💻 Author
Caleb Adebayo
Frontend Developer | Cat Fact Enthusiast 😺

Twitter • GitHub

yaml
Copy code

---

Let me know if you'd like this customized for:
- Another route
- Railway deployment instructions
- `package.json` setup

Or I can auto-generate the `.env.example`, `netlify.toml`, or anything else.


```

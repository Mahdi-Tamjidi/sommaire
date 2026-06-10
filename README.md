# Sommaire

## 1. Environment Variables

Configure the following services before running the project:

- 🔑 OpenAI API Key
- 🦙 Llama API Key
- 👥 Clerk Project Configuration
- ☁️ UploadThing Configuration
- 💳 Stripe Keys & Webhook Secret
- 🐘 NeonDB Connection URL

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY

UPLOADTHING_TOKEN

OPENAI_API_KEY
Llama_API_KEY

DATABASE_URL

STRIPE_SECRETE_KEY
STRIPE_WEBHOOK_SECRET

NODE_ENV=development
```

## 2. Install Dependencies

To run tests, run the following command

```bash
  npm install
```

## 3. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

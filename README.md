# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/9a40d734-3008-4abc-be81-adf63ece8f0d

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/9a40d734-3008-4abc-be81-adf63ece8f0d) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Payments (Paystack)

This project integrates Paystack for collecting waitlist application fees. 

### Environment Setup

Set these environment variables in your `.env` file, GitHub Actions secrets, or Lovable Project Settings:

```env
VITE_PAYSTACK_PUBLIC_KEY=pk_live_a1b065ab9ff7a77972b50678d8211d74ea80a767
VITE_FEE_NGN=15000
# Optional: fallback redirect if inline blocked in sandbox
VITE_PAYSTACK_PAYMENT_PAGE=https://paystack.shop/pay/c26-waitlist
```

- `VITE_PAYSTACK_PUBLIC_KEY`: Your Paystack public key (safe for frontend use)
- `VITE_FEE_NGN`: Application fee amount in Nigerian Naira
- `VITE_PAYSTACK_PAYMENT_PAGE`: Optional fallback payment page URL

**Note:** The config resolver also supports these alternative env variable names for preview environments:
- `PAYSTACK_PUBLIC_KEY` (without VITE_ prefix)
- `LOVABLE_PAYSTACK_PUBLIC_KEY` (Lovable secret name)
- `FEE_NGN` (without VITE_ prefix)

### Graceful Fallback

If Paystack configuration is missing or invalid:
- In development: A small toast notification will appear
- The form will fall back to Formspree-only submission (no payment)
- User will be redirected to `/thank-you?ref=pending`
- The submit button will never get stuck in "Joining..." state

### Manual Slot Counter

The "Only X Slots Available" badge is manually controlled. To update the number:

1. Open `src/pages/Index.tsx`
2. Find the constant: `const MANUAL_SLOTS_AVAILABLE = 30;`
3. Update the number as needed

### Payment Flow

1. User fills waitlist form
2. Clicking "Join Waitlist" opens Paystack inline checkout
3. On successful payment:
   - Lead data is sent to Formspree with `paystack_ref`
   - User is redirected to `/thank-you?ref=<paystack_reference>`
4. On cancel/close: User can retry the payment

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/9a40d734-3008-4abc-be81-adf63ece8f0d) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

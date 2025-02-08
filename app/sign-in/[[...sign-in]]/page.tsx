import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn
        path="/sign-in"
        routing="path"
        signUpUrl="/sign-up"
        afterSignInUrl="/chat"
        appearance={{
          elements: {
            rootBox: "mx-auto w-full max-w-md",
            card: "p-6 bg-white rounded-lg shadow-md",
            socialButtonsBlockButton: "w-full",
          },
        }}
      />
    </div>
  )
}


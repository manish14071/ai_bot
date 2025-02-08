import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignUp
        path="/sign-up"
        routing="path"
        signInUrl="/sign-in"
        afterSignUpUrl="/chat"
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


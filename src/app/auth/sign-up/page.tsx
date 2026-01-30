import { SignupForm1 } from "./components/signup-form-1"
import { Logo } from "@/components/logo"

export default function SignUpPage() {
  return (
    <div className="container relative hidden h-svh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <a href="/" className="relative z-20 flex items-center text-lg font-medium">
          <div className="bg-primary text-primary-foreground mr-2 flex size-9 items-center justify-center rounded-md">
            <Logo size={24} />
          </div>
          GableSite
        </a>
        <div className="z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;GableSite has saved me countless hours of work. The
              components are high-quality and easy to customize.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <SignupForm1 />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

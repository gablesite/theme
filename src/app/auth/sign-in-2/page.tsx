import { LoginForm2 } from "./components/login-form-2"
import { Logo } from "@/components/logo"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="/" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <Logo className="h-6 w-6" />
            </div>
            <span className="text-lg font-bold">GableSite</span>
          </a>
        </div>
        <div className="my-auto space-y-6 text-center text-primary-foreground">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-lg">
            Enter your credentials to access your GableSite account.
          </p>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <LoginForm2 />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://ui.shadcn.com/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.95] dark:invert"
        />
      </div>
    </div>
  )
}

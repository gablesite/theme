import { LoginForm1 } from "./components/login-form-1"
import { Logo } from "@/components/logo"

export default function Page() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Logo className="mr-2 h-6 w-6" />
          GableSite
        </div>
        <div className="z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;GableSite has saved me countless hours of work. The
              components are high-quality and easy to customize.&rdquo;
            </p>
          </blockquote>
        </div>
        <LoginForm1 />
      </div>
    </div>
  )
}

import { Metadata } from "next";
import SignInForm from "./SignInForm";

export const metadata: Metadata = {
  title: "Sign In — TM30.ai",
};

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-bg flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[420px]">
        {/* Logo */}
        <div className="text-center mb-8">
          <a href="/" className="inline-block">
            <span className="text-[24px] font-bold text-dark tracking-tight">
              TM30<span className="text-primary">.ai</span>
            </span>
          </a>
        </div>

        {/* Card */}
        <div className="rounded-xl border border-gray-border bg-white p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <h1 className="text-[22px] font-bold text-dark mb-1">Welcome back</h1>
          <p className="text-[14px] text-gray-text mb-6">
            Sign in to your TM30.ai account
          </p>
          <SignInForm />
        </div>

        {/* Footer link */}
        <p className="text-center text-[13px] text-gray-text mt-6">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-primary font-medium hover:underline">
            Get started
          </a>
        </p>
      </div>
    </div>
  );
}

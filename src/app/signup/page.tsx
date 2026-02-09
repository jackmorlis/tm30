import { Metadata } from "next";
import SignUpForm from "./SignUpForm";

export const metadata: Metadata = {
  title: "Get Started — TM30.ai",
};

export default function SignUpPage() {
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
          <h1 className="text-[22px] font-bold text-dark mb-1">
            Create your account
          </h1>
          <p className="text-[14px] text-gray-text mb-6">
            Start submitting TM30 forms in seconds
          </p>
          <SignUpForm />
        </div>

        {/* Footer link */}
        <p className="text-center text-[13px] text-gray-text mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-primary font-medium hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

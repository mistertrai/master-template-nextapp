// app/signup/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input, Link } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { FirmIcon } from "@/components/icons/firm";
import { supabase } from "@/lib/supabase";

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;
      
      router.push('/app'); // Redirect to app page after successful sign-up
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div
      className="flex h-screen w-screen items-center justify-start overflow-hidden rounded-small bg-content1 p-2 sm:p-4 lg:p-8"
      style={{
        backgroundImage:
          "url(https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/black-background-texture-2.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Brand Logo */}
      <div className="absolute right-10 top-10">
        <div className="flex items-center">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground">
            <FirmIcon className="text-background" />
          </div>
          <p className="ml-2 font-medium text-white">TRAI</p>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-large bg-content1 px-8 pb-10 pt-6 shadow-small">
        <p className="pb-2 text-xl font-medium">Sign Up</p>
        {error && <p className="text-red-500">{error}</p>}
        <form className="flex flex-col gap-3" onSubmit={handleSignUp}>
          <Input
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="bordered"
          />
          <Input
            label="Password"
            placeholder="Create a password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="bordered"
          />
          <Button color="primary" type="submit">
            Sign Up
          </Button>
        </form>
        <p className="text-center text-small">
          Already have an account?&nbsp;
          <Link href="/login" size="sm">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
// app/page.tsx
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Welcome to&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Our App&nbsp;</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Secure, fast, and user-friendly.
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/login"
        >
          Login
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/signup"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}
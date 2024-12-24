import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 flex-grow-0 flex justify-center items-center h-14 lg:mb-0 mb-4">
      <p className="text-center text-sm text-gray-500">
        Copyright © 2024 |{" "}
        <Link href="/terms-conditions" className="text-primary">
          Terms & Conditions
        </Link>{" "}
        |{" "}
        <Link href="/privacy-policy" className="text-primary">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="/cookies-policy" className="text-primary">
          Cookies Policy
        </Link>
      </p>
    </footer>
  );
}

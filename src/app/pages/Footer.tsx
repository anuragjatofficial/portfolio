import React from "react";

export default function Footer({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  const SECONDARY_TEXT = `${
    theme === "dark" ? "text-gray-50" : "text-gray-950"
  }`;

  return (
    <section
      className={`text-center py-5 ${
        theme === "dark" ? "bg-primary text-gray-50" : "bg-primary-bright text-gray-950"
      } `}
    >
      Made with ❤️ by{" "}
      <a href="https://github.com/anuragjatofficial" className="text-active">
        Anurag Choudhary
      </a>
    </section>
  );
}

import React from "react";

export default function Footer({
  theme,
  setTheme,
}: {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}) {
  return (
    <section
      className={`text-center py-5 ${
        theme === "dark" ? "bg-primary" : "bg-primary-bright"
      } text-gray-50`}
    >
      Made with ❤️ by{" "}
      <a href="https://github.com/anuragjatofficial" className="text-active">
        Anurag Choudhary
      </a>
    </section>
  );
}

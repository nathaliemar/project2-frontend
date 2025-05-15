import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 sticky bottom-0">
      <aside>
        <p>
          Made with ♡ in Berlin -{" "}
          <Link className="link link-primary" to={"/about"}>
            Learn more
          </Link>
        </p>
      </aside>
    </footer>
  );
}

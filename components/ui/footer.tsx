import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:py-12">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">YouTube</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://youtube.com/@engineershelloworld?si=ZIWeH2rrKE1DEprE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programming &amp; Coding Tutorials
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://youtube.com/@engineershelloworld?si=ZIWeH2rrKE1DEprE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AI &amp; Machine Learning
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://youtube.com/@engineershelloworld?si=ZIWeH2rrKE1DEprE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Data Science Tutorials
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://youtube.com/@engineershelloworld?si=ZIWeH2rrKE1DEprE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Full Stack Development
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Social Media</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="https://www.instagram.com/your-instagram-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="mailto:your-email@example.com"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
          {/* Logo and copyright block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                © EngineersHelloWorld
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="#0"
                >
                  
                </a>
              </p>
              <ul className="inline-flex gap-1">
                {/* Add your social icons here if needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

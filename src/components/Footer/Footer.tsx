import { useNavigate } from "react-router-dom";

export default function Footer() {

  const navigate = useNavigate();
  return (
    <footer className="relative bg-gray-200 bg-[url('/assets/saiorse-watermark.png')] bg-cover bg-center font-satoshi">
      {/* Watermark background */}

      <div className="relative z-10 mx-auto max-w-8xl px-6 md:px-8 py-10 md:pt-14 md:pb-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: Brand + tagline + socials */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center gap-3">
              <img
                src="/assets/Saiorse-logo.png"
                alt="Saoirse logo"
                width={100}
                className=" h-10 w-auto"
              />
            </div>
            <p className="text-slate-600 leading-relaxed">
              {"Building tomorrow’s digital"}
              <br />
              {"infrastructure"}
            </p>
            <div
              className="flex items-center gap-3 pt-2"
              aria-label="Social media"
            >
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md"
                title="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 rounded-md"
                  role="img"
                  aria-hidden="true"
                >
                  <rect width="24" height="24" rx="6" fill="#1877F2" />
                  <path
                    d="M13.5 8.5h1.75V6H13.5a3 3 0 0 0-3 3v1.5H8v2.5h2.5V18H13v-5H15.1l.4-2.5H13V9a.5.5 0 0 1 .5-.5Z"
                    fill="#fff"
                  />
                </svg>
              </a>
              {/* Instagram */}
              {/* <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md"
                title="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="h-9 w-9 rounded-md"
                  role="img"
                  aria-hidden="true"
                >
                  <rect width="64" height="64" rx="12" fill="#1877F2" />
                  <path
                    fill="#fff"
                    d="M32 12c-5.507 0-6.196.023-8.357.123-2.158.099-3.636.446-4.927.954a9.935 9.935 0 0 0-3.591 2.339 9.935 9.935 0 0 0-2.339 3.591c-.508 1.291-.855 2.769-.954 4.927C12.023 25.804 12 26.493 12 32s.023 6.196.123 8.357c.099 2.158.446 3.636.954 4.927a9.935 9.935 0 0 0 2.339 3.591 9.935 9.935 0 0 0 3.591 2.339c1.291.508 2.769.855 4.927.954C25.804 51.977 26.493 52 32 52s6.196-.023 8.357-.123c2.158-.099 3.636-.446 4.927-.954a9.935 9.935 0 0 0 3.591-2.339 9.935 9.935 0 0 0 2.339-3.591c.508-1.291.855-2.769.954-4.927C51.977 38.196 52 37.507 52 32s-.023-6.196-.123-8.357c-.099-2.158-.446-3.636-.954-4.927a9.935 9.935 0 0 0-2.339-3.591 9.935 9.935 0 0 0-3.591-2.339c-1.291-.508-2.769-.855-4.927-.954C38.196 12.023 37.507 12 32 12zm0 3.6c5.403 0 6.045.02 8.178.118 1.974.09 3.047.42 3.761.697.946.368 1.621.808 2.329 1.516.708.708 1.148 1.383 1.516 2.329.277.714.607 1.787.697 3.761.098 2.133.118 2.775.118 8.178s-.02 6.045-.118 8.178c-.09 1.974-.42 3.047-.697 3.761-.368.946-.808 1.621-1.516 2.329-.708.708-1.383 1.148-2.329 1.516-.714.277-1.787.607-3.761.697-2.133.098-2.775.118-8.178.118s-6.045-.02-8.178-.118c-1.974-.09-3.047-.42-3.761-.697-.946-.368-1.621-.808-2.329-1.516-.708-.708-1.148-1.383-1.516-2.329-.277-.714-.607-1.787-.697-3.761-.098-2.133-.118-2.775-.118-8.178s.02-6.045.118-8.178c.09-1.974.42-3.047.697-3.761.368-.946.808-1.621 1.516-2.329.708-.708 1.383-1.148 2.329-1.516.714-.277 1.787-.607 3.761-.697C25.955 15.62 26.597 15.6 32 15.6zm0 6.133A10.267 10.267 0 1 0 42.267 32 10.267 10.267 0 0 0 32 21.733zm0 16.934A6.667 6.667 0 1 1 38.667 32 6.667 6.667 0 0 1 32 38.667zM42.533 17.2a2.4 2.4 0 1 0 2.4 2.4 2.4 2.4 0 0 0-2.4-2.4z"
                  />
                </svg>
              </a> */}
              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-500"
                title="WhatsApp"
              >
                {/* WhatsApp-style icon (64x64) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="30"
                  height="30"
                  fill="white"
                >
                  <path d="M16.001 3.2c-7.06 0-12.8 5.739-12.8 12.8 0 2.262.598 4.464 1.734 6.396L3.2 28.8l6.58-1.718A12.738 12.738 0 0 0 16 28.8c7.061 0 12.8-5.739 12.8-12.8s-5.739-12.8-12.799-12.8zm0 23.04a10.165 10.165 0 0 1-5.2-1.426l-.374-.222-3.91 1.02 1.042-3.822-.243-.392a10.129 10.129 0 0 1-1.568-5.33c0-5.605 4.561-10.166 10.166-10.166 2.717 0 5.271 1.059 7.191 2.978a10.114 10.114 0 0 1 2.976 7.188c.001 5.604-4.56 10.166-10.08 10.166zm5.56-7.46c-.302-.151-1.787-.879-2.063-.98-.276-.102-.478-.152-.679.152-.201.303-.779.979-.954 1.18-.176.201-.352.227-.654.075-.302-.151-1.274-.469-2.426-1.494-.897-.799-1.502-1.787-1.678-2.089-.176-.303-.019-.467.132-.619.136-.135.302-.352.453-.527.151-.176.201-.302.302-.504.101-.201.05-.378-.025-.529-.075-.151-.679-1.635-.93-2.235-.244-.586-.492-.506-.679-.516l-.579-.01c-.201 0-.528.075-.804.378-.276.303-1.057 1.033-1.057 2.516s1.083 2.918 1.233 3.121c.151.201 2.131 3.259 5.165 4.566.722.311 1.285.496 1.723.635.724.231 1.383.199 1.905.121.581-.086 1.787-.729 2.038-1.432.251-.703.251-1.304.176-1.432-.074-.127-.276-.202-.578-.353z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-900 font-semibold">Contact info</h3>
            <a
              href="mailto:info@saoirseitsolution.com"
              className="text-slate-700 underline underline-offset-2"
            >
              info@saoirseitsolution.com
            </a>
            <a href="tel:+919946502769" className="text-slate-700 cursor-text">
              +91 9946502769
            </a>
            <p className="text-slate-700">Kannur, Kerala, India</p>
          </div>

          {/* Column 3: Menus */}
          <nav aria-label="Footer menus" className="flex flex-col gap-3">
            <h3 className="text-slate-900 font-semibold">Menus</h3>
            <a onClick={()=> navigate('/about')} className="text-slate-700 underline underline-offset-2 cursor-pointer">
              About us
            </a>
            <a onClick={()=> navigate('/franchise')} className="text-slate-700 underline underline-offset-2 cursor-pointer">
              Franchise
            </a>
            <a onClick={()=> navigate('/privacy-policy')} className="text-slate-700 underline underline-offset-2 cursor-pointer">
              Privacy&amp;Policy
            </a>
            <a onClick={()=> navigate('/terms-and-condition')} className="text-slate-700 underline underline-offset-2 cursor-pointer">
              Teams &amp; condition
            </a>
          </nav>

          {/* Column 4: Follow us */}
          <nav aria-label="Follow us" className="flex flex-col gap-3">
            <h3 className="text-slate-900 font-semibold">Follow us on</h3>
            {/* <a href="#" className="text-slate-700 underline underline-offset-2">
              instagram
            </a>
            <a href="#" className="text-slate-700 underline underline-offset-2">
              Facebook
            </a>
            <a href="#" className="text-slate-700 underline underline-offset-2">
              Twitter
            </a> */}
            <a href="#" className="text-slate-700 underline underline-offset-2">
              Linkedin
            </a>
          </nav>
        </div>

        {/* Bottom bar (optional) */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>
            {"© "}
            <span className="font-medium">{"Saoirse"}</span>
            {" — All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}

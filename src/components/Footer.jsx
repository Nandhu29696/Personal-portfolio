import { assets, footerInfo } from "../assets/assets";

export default function Footer({ isDarkMode }) {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 text-sm py-4 mt-20 dark:bg-gray-900 dark:text-white/80">
      <div className="mt-20">
        <div className="text-center">
          <h1 className={`text-3xl font-bold font-Poppins cursor-pointer ${isDarkMode ? "text-white" : "text-black"}`}>Nandhu <span className='text-red-500 text-5xl font-Ovo'>.</span> </h1>
          <div className="w-max flex items-center gap-2 mx-auto">
            <img src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
            <a href={`mailto:${footerInfo.mailID}`} className="ml-2 hover:underline">{footerInfo.mailID}</a>
          </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6">
          <p> © {new Date().getFullYear()} {footerInfo.rights}</p>
          <ul className="flex items-center justify-center gap-10 mt-4 sm:mt-0">
            {footerInfo.socialLinks.map((link, index) => (
              <li key={index}>
                <a target="_blank" rel="noreferrer" href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

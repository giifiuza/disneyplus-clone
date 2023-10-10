import { Footer } from 'flowbite-react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';


export default function FooterSitemapLinks() {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
  
          <div className="w-full  px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              by="Giovanna Fiuza™"
              year={2023}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.instagram.com/gi_fiuzaa/"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://br.linkedin.com/in/gifiuzaa"
                icon={BsLinkedin}
              />
              <Footer.Icon
                href="https://github.com/giifiuza"
                icon={BsGithub}
              />
            </div>
        </div>
        </div>
      </div>
    </Footer>
  )
}
import logo from "../assets/images/logo-text.png";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          

          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Dev Stack Logo"/>

            </div>

            <p className="text-sm text-gray-500 mt-4">
              Curated tools, technologies and <br />resources for developers building <br />
              modern software.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="">GitHub</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>

          
          <div>
            <h3 className="font-semibold mb-3">
              Product
            </h3>

            <ul className="space-y-2 text-gray-500">
              <li>Technologies</li>
              <li>Projects</li>
              <li>Resources</li>
            </ul>
          </div>

          

          <div>
            <h3 className="font-semibold mb-3">
              Company
            </h3>

            <ul className="space-y-2 text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

         
         
          <div>
            <h3 className="font-semibold mb-3">
              Legal
            </h3>

            <ul className="space-y-2 text-gray-500">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
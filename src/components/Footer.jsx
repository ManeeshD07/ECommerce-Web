import logo from "../assets/logo-foot.png"
import map from "../assets/MapPin.png"
import call from "../assets/Call.png"
import gmail from "../assets/GmailLogo.png"

const Footer = () => {
  return (
    <div>

    <footer class="bg-white dark:bg-gray-900">
        <div class="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 font-custom">
            <div>
                <img src={logo} className="py-4 shrink-0"></img>
                <ul class="text-gray-500 dark:text-gray-400">
                    <li class="mb-4 flex">
                        <img src={map} className= "font-footer object-none"></img>
                        <p> Street No. 12, Newyork 12,MD - 123, USA.</p>
                    </li>
                    <li class="mb-4 flex">
                        <img src={call} className= "font-footer object-none"></img>
                        <p> 1.800.123.456789</p>
                    </li>
                    <li class="mb-4 flex">
                        <img src={gmail} className= "pr-2 font-footer object-none"></img>
                        <p> info@ecoshop.com</p>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">HELPFUL LINKS</h2>
                <ul class="text-gray-500 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Products</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Find a Store</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Features</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Blog</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Press Kit</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">SHOP</h2>
                <ul class="text-gray-500 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">About Us</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Career</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Shipping Methods</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Contact</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Support</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Retailer</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">MY ACCOUNT</h2>
                <ul class="text-gray-500 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Login</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">My Account</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">My Cart</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Whishlist</a>
                    </li>
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Checkout</a>
                    </li>
                </ul>
            </div>
            <span class="font-custom text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2016 ecoshop All right reserved.
            </span>
        </div>
    </footer>
    </div>
  );
};
export default Footer;
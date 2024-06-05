

const Footer = () => {
    return (
        <footer className="footer p-10 bg-cyan-600 text-base-content">
  <aside>
  <h1 className="lg:text-6xl font-bold ">
            <span className="text-yellow-400 fade-in">Toy</span>
           <span className="text-lime-400 fade-in-delayed">Nest</span>
         </h1>
   <p className="text-lg text-white font-serif mt-5">Providing reliable toys for your child.</p>
  </aside> 
  <nav className="text-white text-lg font-serif">
    <h6 className="footer-title ">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav className="text-white text-lg font-serif">
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav className="text-white text-lg font-serif">
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;
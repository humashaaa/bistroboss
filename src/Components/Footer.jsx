
const Footer = () => {
    const current =new Date().getFullYear();
    return (
        <div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © {current} - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;
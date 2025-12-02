function Footer () {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="footer-section">
                    <h3 className="footer-logo">ConsultingCo</h3>
                    <p className="footer-description">Welcome to our consulting agency. We are dedicated to help your business grow.</p>
                    <div className="footer-contact">
                        <p><img src="/images/phone-square-alt.svg" alt="" />056 984 5678</p>
                        <p><img src="/images/email.svg" alt="" />info@consultingco.com</p>
                        <p><img src="/images/map-marker-alt.svg" alt="" />123 Airport road, Abuja, Nigeria.</p>
                    </div>
                </div>
                <div className="footer-social">
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
                <div className="footer-copyright">
                    <p>Copyright 2025 by Company</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
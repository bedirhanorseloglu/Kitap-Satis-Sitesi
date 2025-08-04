import "./footer.css";

const Footer = () => 
{
  return (
    <footer className="footer">

      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">İletişim Bilgileri</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Trabzon/Türkiye
            </div>

            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              444 61 61
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              orseloglubedirhan@gmail.com
            </div>
          </div>
        </div>


        <div className="footer-social-media">
          <h3 className="footer-social-media-title">Sosyal Medya Hesaplarımız</h3>
          <div className="footer-social-media-icons">
            <div className="footer-social-media-icon">
              <a href="https://www.instagram.com/bedirhanorseloglu/" target="_blank"  rel="noopener noreferrer">
                <i style={{ color: "#E4405F" }}  className="bi bi-instagram"></i>
              </a>
            </div>

            <div className="footer-social-media-icon">
              <a href="https://www.linkedin.com/in/bedirhanorseloglu/"  target="_blank"  rel="noopener noreferrer">
                <i   style={{ color: "#0077B5" }}  className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>


        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Hakkımda</h3>
          <p className="footer-description">
            Bandırma Onyedi Eylül Üniverstesi’nde 3. sınıf öğrencisiyim. Ekip
            çalışmasına yatkın, sorumluluk sahibi, öğrenmeye ve gelişmeye açık
            bir bireyim. Yapay zeka alanında kendimi geliştirmeye çalışıyorum.
            Gelecek yedi yıl içerisinde bu alanda faaliyet gösteren firmalarda
            çalışarak tecrübe kazanmak, sonraki 5 yıl içerisinde de kendi
            şirketimi kurmayı hedefliyorum.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

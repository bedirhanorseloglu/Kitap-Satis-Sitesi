import "./about.css";

const About = () => 
{
  return (
    <section className="about">
      <h1>HAKKIMDA</h1>
      <div className="about-content">
        <img src="https://media.licdn.com/dms/image/v2/D5603AQFiak0vwEqJUQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724188017902?e=1729728000&v=beta&t=G-QOkQtpeUDCyxC3jcfi-PWb4KoFrRK1q0QPvILOrHI" alt="My Photo" className="about-photo" />
        <div className="about-text">
          <p>Bandırma Onyedi Eylül Üniversitesi’nde 3. sınıf öğrencisiyim. 
            Ekip çalışmasına yatkın, sorumluluk sahibi, öğrenmeye ve gelişmeye açık bir bireyim. 
            Yapay zeka alanında kendimi geliştirmeye çalışıyorum. 
            Gelecek yedi yıl içerisinde bu alanda faaliyet gösteren firmalarda çalışarak tecrübe kazanmak, sonraki 5 yıl içerisinde de kendi şirketimi kurmayı hedefliyorum.</p>
          <p>
            <strong>Version: 1.0.0</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

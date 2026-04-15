import PhotoGallery from './PhotoGallery';

export default function Home() {
  return (
    <>
      <div className="background-animation">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      <main className="main-container">
        <header className="glass-panel profile-header">
          <div className="profile-image-placeholder">
            <i className="fa-solid fa-user-tie"></i>
          </div>
          <div className="profile-info">
            <h1>Nikhil Kumar</h1>
            <p className="tagline">💼 Software Engineer</p>
            <div className="location-dob">
              <span><i className="fa-solid fa-calendar-days"></i> 06 Feb, 2002</span>
              <span><i className="fa-solid fa-location-dot"></i> Noida, Uttar Pradesh</span>
            </div>
          </div>
        </header>

        <div className="grid-content">
          <section className="glass-panel about-section">
            <h2><i className="fa-solid fa-hands-praying"></i> About Me</h2>
            <p>I am a grounded, family-oriented individual who believes in the balance of tradition and modernity. I enjoy meaningful conversations, value honesty and respect in relationships, and am passionate about personal growth. I am looking for a life partner who shares similar values and aspirations.</p>
          </section>

          <section className="glass-panel details-section">
            <h2><i className="fa-solid fa-user"></i> Personal Details</h2>
            <ul className="detail-list">
              <li><strong>Age:</strong> <span>24 years</span></li>
              <li><strong>Height:</strong> <span>5&apos;11&quot; (181 cm)</span></li>
              <li><strong>Religion:</strong> <span>Hindu</span></li>
              <li><strong>Caste:</strong> <span>Rajput</span></li>
              <li><strong>Mother Tongue:</strong> <span>Hindi</span></li>
            </ul>
          </section>

          <section className="glass-panel education-section">
            <h2><i className="fa-solid fa-graduation-cap"></i> Education</h2>
            <div className="timeline-item">
              <h3>B.Tech in Computer Science</h3>
              <p>GLA university • 2023</p>
            </div>
          </section>

          <section className="glass-panel profession-section">
            <h2><i className="fa-solid fa-briefcase"></i> Profession</h2>
            <div className="timeline-item">
              <h3>Software Engineer</h3>
              <p>Diagnomitra Healthcare Solutions Pvt. Ltd.</p>
            </div>
            <div className="timeline-item">
              <h3>Freelance Developer</h3>
              <p>Freelancing for last 1 year (5+ clients), currently working with RSS for their NGO national level website.</p>
            </div>
          </section>

          <section className="glass-panel family-section">
            <h2><i className="fa-solid fa-people-roof"></i> Family Details</h2>
            <ul className="detail-list">
              <li><strong>Father:</strong> <span>Mr. Praveen Kumar (Business)</span></li>
              <li><strong>Mother:</strong> <span>Mrs. Vimlesh (Homemaker)</span></li>
              <li><strong>Siblings:</strong> <span>1 Younger Brother (Unmarried)</span></li>
            </ul>
          </section>

          <section className="glass-panel lifestyle-section">
            <h2><i className="fa-solid fa-leaf"></i> Lifestyle &amp; Interests</h2>
            <ul className="detail-list tag-list">
              <li>
                <strong>Hobbies:</strong> 
                <div>
                  <span className="style-tag">Reading</span>
                  <span className="style-tag">Traveling</span>
                  <span className="style-tag">Cricket</span>
                </div>
              </li>
              <li>
                <strong>Food:</strong> 
                <div><span className="style-tag">Vegetarian</span></div>
              </li>
              <li>
                <strong>Habits:</strong> 
                <div>
                  <span className="style-tag">Non-smoker</span>
                  <span className="style-tag">Non-drinker</span>
                </div>
              </li>
            </ul>
          </section>
          <PhotoGallery />
        </div>
      </main>
    </>
  );
}

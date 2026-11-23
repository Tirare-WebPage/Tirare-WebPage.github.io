              <div className="iiitd-copy"><span className="milestone-id">01 / IIIT DELHI</span><Eyebrow>E-PITCH CAFÉ 2026 · CiPD</Eyebrow><div className="grant-figure">₹1<span>lakh</span></div><h3>Prototype-stage support for Tirare.</h3><p>Tirare was selected as a funded finalist in the Proof-of-Concept track at E-Pitch Café 2026 through the Centre for Intelligent Product Development at IIIT Delhi.</p><p className="document-note">The ceremony photograph and certificate are given prominent space so the recognition can be seen directly.</p></div>
              <div className="iiitd-media">
                <Figure kind="image" src="/evidence/iiitd-award-receiving.jpg" title="Receiving the IIIT Delhi recognition" detail="E-Pitch Café 2026 / ceremony photograph" description="Add the actual photograph at public/evidence/iiitd-award-receiving.jpg." className="award-photo" />
                <Figure kind="image" src="/evidence/iiitd-grant-certificate.jpg" title="IIIT Delhi grant certificate" detail="Certificate / Proof-of-Concept track" description="Add a public-safe certificate image at public/evidence/iiitd-grant-certificate.jpg." fit="contain" />
              </div>
            </div>
            <article className="bic-feature">
              <div className="bic-copy">
                <span className="milestone-id">02 / BHARAT INNOVATION CHALLENGE</span>
                <Eyebrow>BIC 2.0 · GRAND FINALE · LOVELY PROFESSIONAL UNIVERSITY</Eyebrow>
                <div className="grant-figure bic-award-figure">₹50<span>thousand</span></div>
                <h3>A new milestone for Tirare.</h3>
                <p>At the Bharat Innovation Challenge 2.0 Grand Finale at Lovely Professional University, Tirare received ₹50,000 in award support.</p>
                <p>The recognition marks another step in developing an affordable electric retrofit for the cargo tricycles workers already depend on: electrification without replacement.</p>
              </div>
              <div className="bic-media">
                <Figure
                  kind="image"
                  src="/assets/media/bic%20lpu.jpeg"
                  title="Tirare at BIC 2.0 Grand Finale"
                  detail="Lovely Professional University · November 2026"
                  description="Photograph from the Bharat Innovation Challenge 2.0 Grand Finale at Lovely Professional University."
                  aspect="landscape"
                  className="bic-photo"
                />
                <Figure
                  kind="video"
                  src="/assets/media/working%20prototype.mp4"
                  title="The working prototype"
                  detail="Seven-second prototype demonstration · muted loop"
                  description="A seven-second clip showing the Tirare prototype in action."
                  aspect="cinematic"
                  className="bic-video"
                  autoPlay
                  loop
                  clipStart={0}
                  clipEnd={7}
                />
              </div>
            </article>
            <div className="patent-feature">
              <div className="patent-copy"><span className="milestone-id">03 / INTELLECTUAL PROPERTY</span><Eyebrow>INDIA · PROVISIONAL APPLICATION</Eyebrow><h3>Provisional application submitted.</h3><p>The project record states that a provisional patent application relating to MRII was submitted through the Indian e-filing process on 2 October 2026. This is a filing milestone, not a granted patent.</p><p className="document-note">Publish only a redacted acknowledgement. Remove personal contact information, signatures, payment references and any technical disclosure that should remain private.</p></div>
              <Figure kind="pdf" src="/evidence/patent-efiling-acknowledgement.pdf" title="Patent e-filing acknowledgement" detail="Provisional application submitted · 2 October 2026" description="Add a redacted public-safe PDF at public/evidence/patent-efiling-acknowledgement.pdf." className="patent-document" />
            </div>
            <div className="document-gallery">
              <Figure kind="image" src="/evidence/queens-commonwealth-bronze.jpg" title="Queen’s Commonwealth Essay Competition" detail="Bronze Medal / certificate" description="Add a certificate image at public/evidence/queens-commonwealth-bronze.jpg." fit="contain" />
              <Figure kind="image" src="/evidence/f1-schools-national.jpg" title="F1 in Schools / Team Seraphis" detail="National Finals / team record" description="Add a qualification record, certificate or team photograph at public/evidence/f1-schools-national.jpg." />
              <Figure kind="image" src="/evidence/wro-record.jpg" title="WRO Future Engineers" detail="Competition record" description="Add a certificate or real competition photograph at public/evidence/wro-record.jpg." />
            </div>
          </div>
        </section>

        <section className="section other-work-section" id="work">
          <div className="section-shell">
            <SectionIndex number="07" label="OTHER PROJECTS & INITIATIVES" />
            <div className="section-heading"><div><Eyebrow>SELECTED WORK OUTSIDE TIRARE</Eyebrow><h2>Selected work<br/><em>beyond Tirare.</em></h2></div><p>Engineering is the centre of this portfolio, but it is not the only place I have put time and effort. These projects show work with teams, communication, competition and public problems.</p></div>
            <div className="other-project-grid">
              {projects.map((project) => (
                <article className="other-project" key={project.id}>
                  <div className="other-project-image"><AssetFrame kind={project.kind} src={project.src} title={project.title} description={`Add ${project.path.replace(/^\//, "public/")}.`} aspect="landscape" /></div>
                  <div className="other-project-copy"><div className="other-project-meta"><span>{project.id}</span><span>{project.category}</span></div><h3>{project.title}</h3><strong>{project.subtitle}</strong><p>{project.description}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section personal-section" id="personal">
          <div className="section-shell">
            <SectionIndex number="08" label="PERSONAL RECORD" />
            <div className="section-heading"><div><Eyebrow>OUTSIDE ENGINEERING</Eyebrow><h2>Helping an<br/><em>injured pigeon.</em></h2></div><p>A personal experience documented on my LinkedIn profile. I am including it because the work I do is not limited to engineering projects or competition results.</p></div>
            <div className="rescue-story">
              <div className="rescue-copy"><p className="rescue-lead">A pigeon that regularly visited my balcony became injured and could no longer fly properly.</p><p>I tried to find someone who could help. After several unsuccessful calls, I contacted Vidyasagar Jeev Daya Parivar Trust. Their hospital was around 25 kilometres away and they could not send a vehicle, so I was guided on how to transport the bird myself.</p><p>Getting the pigeon safely into a paper bag took hours. I eventually managed to take it to the hospital and hand it over for care. I had a Physics exam the next day, but I did not want to leave the bird without help.</p><a className="text-link" href={LINKEDIN} target="_blank" rel="noreferrer">Read the original LinkedIn post <ArrowUpRight size={15}/></a></div>
              <Figure kind="image" src="/stories/pigeon-rescue/01-balcony.jpg" title="The pigeon on the balcony" detail="Original photograph / before the rescue" description="Add the original first photograph at public/stories/pigeon-rescue/01-balcony.jpg." aspect="portrait" className="rescue-feature-photo" />
            </div>
            <div className="rescue-photo-grid">
              <Figure kind="image" src="/stories/pigeon-rescue/02-rescue-attempt.jpg" title="During the rescue" detail="Attempting to contain the bird safely" description="Add public/stories/pigeon-rescue/02-rescue-attempt.jpg." />
              <Figure kind="image" src="/stories/pigeon-rescue/03-transport.jpg" title="Transport to the hospital" detail="The journey for care" description="Add public/stories/pigeon-rescue/03-transport.jpg." />
              <Figure kind="image" src="/stories/pigeon-rescue/04-aftercare.jpg" title="After handover" detail="Hospital / aftercare, if photographed" description="Add public/stories/pigeon-rescue/04-aftercare.jpg only if you have a genuine photograph." />
            </div>
          </div>
        </section>

        <section className="section record-list-section" id="recognition">
          <div className="section-shell">
            <SectionIndex number="09" label="SELECTED ACHIEVEMENTS & ROLES" />
            <div className="section-heading"><div><Eyebrow>COMPETITIONS · AWARDS · LEADERSHIP</Eyebrow><h2>A wider record<br/><em>of participation and work.</em></h2></div><p>A concise index of selected achievements, roles, invitations and credentials. Each entry is labelled by what it represents.</p></div>
            <div className="recognition-list">
              {recognitions.map((item, index) => <article className="recognition-row" key={item.title}><span className="recognition-no">{String(index + 1).padStart(2, "0")}</span><span className="recognition-kind">{item.kind}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><ArrowUpRight size={15} /></article>)}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="section-shell about-layout">
            <SectionIndex number="10" label="ABOUT ANURAG" />
            <div className="about-copy"><Eyebrow>STUDENT · FOUNDER · INDEPENDENT BUILDER</Eyebrow><h2>Student, founder,<br/><em>independent researcher.</em></h2><p className="about-lead">I am a student in Class XI in India. Most of my work has grown through self-directed learning, competition teams, technical reading, mentors and the process of trying to make an idea survive outside a document.</p><p>I am drawn to mechanical engineering because a physical system has to answer to geometry, materials, forces and manufacturing. I am drawn to research because a technical claim should be traceable to evidence. I also care about the human context: a technically elegant solution is not enough if it ignores how people actually live and work.</p><p>I began with limited equipment and learned to work around practical constraints while building my technical foundation. That has made resourcefulness important, but it has also taught me to seek feedback, facilities and collaborators when a project needs them.</p><div className="about-links"><a href={LINKEDIN} target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn <ArrowUpRight size={14}/></a><a href={`mailto:${EMAIL}`}><Mail size={16}/> Email <ArrowUpRight size={14}/></a><a href={TIRARE} target="_blank" rel="noreferrer">Tirare <ArrowUpRight size={14}/></a></div></div>
            <div className="about-portrait-wrap"><AssetFrame kind="image" src="/profile/anurag-portrait.jpg" title="Anurag Mishra" description="Add a portrait at public/profile/anurag-portrait.jpg." aspect="portrait" /></div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-main">
            <div><Eyebrow inverse>CONTACT / COLLABORATION</Eyebrow><h2>Talk about<br/><em>the work.</em></h2><p>For engineering discussions, research feedback, mentorship, collaboration or questions about Tirare and MRII, please get in touch.</p></div>
            <div className="contact-links"><a className="contact-email" href={`mailto:${EMAIL}`}>{EMAIL}<ArrowUpRight size={18}/></a><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={15}/></a><a href={TIRARE} target="_blank" rel="noreferrer">Tirare website <ArrowUpRight size={15}/></a><a href={TIRARE_ARCHIVE} target="_blank" rel="noreferrer">Tirare project archive <ArrowUpRight size={15}/></a></div>
          </div>
          <footer className="site-footer section-shell"><a className="brand brand-footer" href="#top"><span className="brand-mark">AM</span><span className="brand-name">ANURAG MISHRA<small>ENGINEERING / RESEARCH / INITIATIVE</small></span></a><span>Personal portfolio · Tirare is a separate project and venture.</span><a href="#top">Back to top ↑</a><span>© {new Date().getFullYear()} Anurag Mishra</span></footer>
        </section>
      </main>
    </>
  );
}

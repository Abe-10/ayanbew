import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', background: '#eee' }}>
        <p>&copy; 2025 Timo. All rights reserved.</p>
      </footer>
    </>
  )
}

import Image from 'next/image'

const About = () => {
  return (
    <div style={styles.container}>
      <Image
        src="/jedd.jpg" // 
        alt="Foto Profil"
        width={150}
        height={150}
        style={styles.profileImage}
      />
      <h2>ABOUT ME</h2>
      <p>SAYA ANAK PERTAMA DARI 2 BERSAUDARA, MAHASISWA YANG SEDANG BELAJAR MEMBUAT WEB.</p>
    </div>
  )
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  profileImage: {
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover'
  }
}

export default About

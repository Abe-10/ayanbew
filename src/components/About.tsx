import Image from 'next/image'

const About = () => {
  return (
    <div style={styles.container}>
      {/* Foto profil bulat */}
      <Image
        src="/jedd.jpg" //
        alt="Foto Profil"
        width={150}
        height={150}
        style={styles.profileImage}
      />

      {/* Judul dan deskripsi */}
      <h2>ABOUT ME</h2>
      <p><b>JED TIMO ABE ABIDIN</b></p>
      <p>ANAK PERTAMA DARI 2 BERSAUDARA, SAYA ANAK YANG BANDEL DARI KECIL, TAPI 
        KAYANYA SEKARANG UDA TOBAT DAN MELAKUKAN AKTIVITAS YANG SERING MEMBUAT ORTU SAYA KHAWATIR
        
        CONTOHNYA YA DIBAWAH INI
      </p>

      {/* Galeri foto horizontal */}
      <div style={styles.galleryContainer}>
        {Array.from({ length: 6 }, (_, i) => (
          <div key={i} style={styles.imageWrapper}>
            <Image
              src={`/photos/timo${i + 1}.jpg`} // otomatis timo1.jpg sampai timo6.jpg
              alt={`Timo ${i + 1}`}
              width={200}
              height={250} // rasio 4:5
              style={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center',
    marginBottom: '60px'
  },
  profileImage: {
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover'
  },
  galleryContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '16px',
    padding: '20px 0',
    marginTop: '30px',
    scrollSnapType: 'x mandatory'
  },
  imageWrapper: {
    flex: '0 0 auto',
    scrollSnapAlign: 'start'
  },
  galleryImage: {
    borderRadius: '10px',
    objectFit: 'cover'
  }
}

export default About

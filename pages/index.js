import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner'
import Card from '../components/card'
import coffeeStoresData from '../data/coffee-stores.json'

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoresData,
    },
  };
}

export default function Home(props) {
 const handleOnBannerBtnClick = () => {
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <Banner buttonText="View Stores Nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image  src="/static/hero-image.svg" width={500} height={400} alt="hero-image"  />
          </div>
          {props.coffeeStores.length > 0 && (
            <>
          <h2 className={styles.heading2}>Erie Stores</h2>
        <div className={styles.cardLayout}>
          {props.coffeeStores.map((coffeeStore) =>{ return (
            <Card className={styles.card} key={coffeeStore.id}
            name={coffeeStore.name} 
            imgUrl={coffeeStore.imgUrl} 
            href={`/coffee-store/${coffeeStore.id}`} />
            );
          })}
        </div>
        </>
          )}
        
      </main>
    </div>
  )
}

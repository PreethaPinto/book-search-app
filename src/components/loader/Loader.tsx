import  LoaderImage from '/src/images/loader.svg'
import  styles from './Loader.module.css'

const Loader = () => {
  return (
    <>
    <div className={styles.loader} >
    <img src={LoaderImage} alt="loader"  className={styles['loader-image']}/>
    </div>
    </>
  )
}

export default Loader
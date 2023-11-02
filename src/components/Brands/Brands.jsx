import styles from './Brands.module.css';
import image27 from '../../assets/img/Brands/image27.svg';
import image28 from '../../assets/img/Brands/image28.svg';
import image29 from '../../assets/img/Brands/image29.svg';
import image30 from '../../assets/img/Brands/image30.svg';
import image31 from '../../assets/img/Brands/image31.svg';

export default function Brands() {
  return (
      <div className={styles.wrapper}>
        <img src={image27} alt="" />
        <img src={image28} alt="" />
        <img src={image29} alt="" />
        <img src={image30} alt="" />
        <img src={image31} alt="" />
      </div>
  );
}

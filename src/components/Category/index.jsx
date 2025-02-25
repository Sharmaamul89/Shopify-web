import Image from "next/image";
import styles from './Category.module.css';
const categories = [
  { src: "/assets/category/women.jpg", label: "Women" },
  { src: "/assets/category/accessories.jpg", label: "Accessories" },
  { src: "/assets/category/footwear.jpg", label: "Footwear" },
  { src: "/assets/category/watches.jpg", label: "Watches" },
];

const CategoryGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Women Category */}
        <div className={styles.women}>
          <Image src="/women.jpg" alt="Women" width={500} height={500} className={styles.image} />
          <button className={styles.button}>Women</button>
        </div>

        {/* Accessories + Footwear (Left) and Watches (Right) */}
        <div className={styles.rightSection}>
          <div className={styles.leftSubCategories}>
            <div className={styles.accessories}>
              <Image src="/accesories.jpg" alt="Accessories" width={200} height={200} className={styles.image} />
              <button className={styles.button}>Accessories</button>
            </div>
            <div className={styles.footwear}>
              <Image src="/footwear.jpg" alt="Footwear" width={200} height={200} className={styles.image} />
              <button className={styles.button}>Footwear</button>
            </div>
          </div>
          <div className={styles.watches}>
            <Image src="/watch.jpg" alt="Watches" width={500} height={800} className={styles.image} />
            <button className={styles.button}>Watches</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CategoryGrid;
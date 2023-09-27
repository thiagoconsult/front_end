import styles from "./Brand.module.css";

export const Brand = () => {
  return (
    <div>
      <h2>
        <span className={styles.brand_part1}>My</span>
        <span className={styles.brand_part2}>Demands</span>
      </h2>
    </div>
  );
};

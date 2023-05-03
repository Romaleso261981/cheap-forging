import styles from "./styles.module.css";

export const DropDown = ({ getFilter }) => {
  return (
    <div style={{ marginTop: 50, marginLeft: 0 }}>
      <label for="filter" style={{ marginRight: 20 }}>
        Категорія
      </label>
      <select
        className={styles.select}
        id="filter"
        name="filter"
        onChange={(e) => {
          getFilter(e.target.value);
        }}
      >
        <option className={styles.option} value="Ковані ворота">Ковані ворота</option>
        <option className={styles.option} value="Грати">Грати</option>
        <option className={styles.option} value="Ворота з профнастилу">Ворота з профнастилу</option>
        <option className={styles.option} value="Ковані гвинтові сходи">Ковані гвинтові сходи</option>
        <option className={styles.option} value="Ковані козирки">Ковані козирки</option>
        <option className={styles.option} value="Лавочки">Лавочки</option>
        <option className={styles.option} value="Монгали та грилі">Монгали та грилі</option>
        <option className={styles.option} value="Ковані арки">Ковані арки</option>
      </select>
    </div>
  );
};

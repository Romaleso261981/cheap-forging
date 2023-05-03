import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSortPlanes } from "../../hooks/useSortPlanes";
import { paths } from "../../paths";
import { Button } from "../../components/button";
import { Header } from "../../components/header";
import { Planes } from "../../components/planes";
import { ContentWrapper } from "../../components/content-wrapper";
import styles from "./styles.module.css";


export const AdminPage = () => {
  const { planes } = useSelector((state) => state.planes);
  const { isDescSort, setIsDescSort } = useSortPlanes(
    planes || []
    );
 
  return (
    <React.Fragment>
      <Header />
      {true && (
        <div className={styles.sort}>
          <ContentWrapper className={styles.planesHeader}>
            <Button
              className={styles.sortBtn}
              onClick={() => setIsDescSort(!isDescSort)}
            >
              Сортувати по вартості {`${isDescSort ? "+" : "-"}`}
            </Button>
            <Link to={paths.createPlane} className={styles.createPlaneBtn}>
              Добавити товар
            </Link>
          </ContentWrapper>
        </div>
      )}
      <Planes />
    </React.Fragment>
  );
};

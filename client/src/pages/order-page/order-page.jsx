import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button";
import { ContentWrapper } from "../../components/content-wrapper";
import styles from "./styles.module.css";

export const OrderPage = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper className={styles.order}>
      <h1>Поки що я рацюю над цією сторінкою Андрій Іванович</h1>
      <Button containerClassName={ styles.button } onClick={() => navigate('/')}>На головну</Button>
    </ContentWrapper>
  );
};

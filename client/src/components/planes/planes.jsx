import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSortPlanes } from "../../hooks/useSortPlanes";
import { getPlanes } from "../../store/planes/planesSlice";
import { ContentWrapper } from "../content-wrapper";
import { PlaneItem } from "../plane-item";
import { Spinner } from "../spinner";
import styles from "./styles.module.css";

export const Planes = () => {
  const dispatch = useDispatch();
  const { planes, isLoading } = useSelector((state) => state.planes);
  const { sortedPlanes } = useSortPlanes(
    planes || []
  );

  useEffect(() => {
    dispatch(getPlanes());
  }, [dispatch]);

  if (isLoading) return <Spinner />;

  return (
    <div>
      <ContentWrapper className={styles.planesGrid}>
        {sortedPlanes &&
          sortedPlanes.map((plane) => <PlaneItem key={plane._id} {...plane} />)}
      </ContentWrapper>
    </div>
  );
};

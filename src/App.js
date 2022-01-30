import React, { useEffect, lazy, Suspense } from "react";
import { faPlus, faLink } from "@fortawesome/free-solid-svg-icons";
import { pageData } from "./apis";
import { Swipeable, SwipeableItem } from "./Swipeable";
import { IconButton } from "./IconButton";
import "./styles.css";
import { BreadCrumbs } from "./Breadcrumbs";

const Card = lazy(() => import("./Card"));
const Image = lazy(() => import("./Image"));

export default function App() {
  let { header, list } = pageData || {};
  return (
    <div className="App">
      <BreadCrumbs crumbs={header?.data?.breadCrumbs} />
      <header className="app-swipeable">
        <div className="tr-btns">
          <IconButton Icon={faPlus}>Save Collections</IconButton>
          <IconButton Icon={faLink} />
        </div>
        <div className="overhead-text">
          <div>{header?.data?.title}</div>
          <div>{header?.data?.paragraph}</div>
          <p>{header?.data?.placesCount} Places</p>
        </div>
        {header?.images?.length && (
          <Swipeable>
            {header?.images?.map((image, index) => (
              <SwipeableItem key={index}>
                <img src={image} alt="" width="100%" height="100%" />
              </SwipeableItem>
            ))}
          </Swipeable>
        )}
      </header>
      <section className="app-restaurants-list">
        {/* Restaurant List */}
        {list.length &&
          list.map((items, index) => (
            <Suspense fallback={<div>loading...</div>}>
              <Card key={index} {...items}>
                <Image src={items.image} />
              </Card>
            </Suspense>
          ))}
      </section>
    </div>
  );
}

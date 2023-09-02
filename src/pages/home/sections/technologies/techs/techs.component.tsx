import { useState, useEffect } from "react";
import {
  DashedCircle,
  DotCircle,
  GlobeItem,
  GlobeItemImage,
  Sphere,
  TechDescription,
  Wrapper,
} from "./techs.styled";
import { TECHNOLOGIES } from "./techs.mock";

import GlobeImage from "../../../../../assets/green_globe.png";
import MouseImage from "../../../../../assets/mouse.svg";

interface GlobalItemProps {
  title: string;
  image: string;
  description: string;
  key: string;
}

function Techs() {
  const [itemActive, setItemActive] = useState<GlobalItemProps | null>();

  const globeItems = TECHNOLOGIES.map((item: GlobalItemProps) => {
    return (
      <GlobeItem
        key={item.key}
        className={`${item.key}-item`}
        onClick={() => setItemActive(item)}
        isActive={!itemActive || itemActive?.key === item.key ? true : false}
      >
        <DotCircle />
        <GlobeItemImage src={item.image} alt={item.title} />
      </GlobeItem>
    );
  });

  return (
    <Wrapper>
      {!itemActive ? (
        <TechDescription>
          <img src={MouseImage} alt={"mouse icon"} />
          <span>
            Selecione uma <br />
            tecnologia
          </span>
        </TechDescription>
      ) : (
        <TechDescription>
          <strong>{itemActive.title}</strong>
          <span>{itemActive.description}</span>
          <a role="button" onClick={() => setItemActive(null)}>
            fechar [x]
          </a>
        </TechDescription>
      )}
      <DashedCircle />
      <Sphere src={GlobeImage} alt="sphere image" />

      {globeItems}
    </Wrapper>
  );
}

export default Techs;

import { memo, useCallback, useState } from "react";
import { useAppSelector } from "src/store/hooks";
import { getCounterValue } from "src/store/Selectors/counterSelector";

const AboutPage = () => {
  const counterValue = useAppSelector(getCounterValue)
  return (
    <div data-testid="about-page">
      -=About=-
      <div>{counterValue}</div>
    </div>
  )
};

export default AboutPage;

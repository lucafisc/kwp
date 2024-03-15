import { useEffect, useState } from "react";

export function useParentDimensions(elementId: string) {
  const [parentDimensions, setParentDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  useEffect(() => {
    const getParentDimensions = () => {
      const parentElement = document.getElementById(elementId);
      if (parentElement) {
        setParentDimensions({
          width: parentElement.offsetWidth,
          height: parentElement.offsetHeight,
        });
      } else {
        console.error(`Element with id ${elementId} not found`);
      }
    };

    getParentDimensions();
    window.addEventListener("resize", getParentDimensions);

    return () => {
      window.removeEventListener("resize", getParentDimensions);
    };
  }, [elementId]);

  useEffect(() => {
    console.log("new parentDimensions", parentDimensions);
  }, [parentDimensions]);

  return parentDimensions;
}

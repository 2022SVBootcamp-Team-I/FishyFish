import { useState, useEffect } from "react";

export const useTitle = (initialTitle: string) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    if (!htmlTitle) {
      return;
    } else {
      htmlTitle.innerText = title;
    }
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
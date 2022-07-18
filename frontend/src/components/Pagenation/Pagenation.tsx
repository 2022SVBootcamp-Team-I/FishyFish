import React,{useState} from "react";

import ka1 from "./ka1.svg";
import ka2 from "./ka2.svg";
import ka3 from "./ka3.png";

const imgList: any = [ 
  <img width="80px" height="160px" src={ka2} alt="test" />,  
  <img width="80px" height="160px" src={ka1} alt="test" />,  
  <img width="80px" height="160px" src={ka3} alt="test" />,  
  <img width="80px" height="160px" src={ka1} alt="test" />,  
  <img width="80px" height="160px" src={ka2} alt="test" />,   
  <img width="80px" height="160px" src={ka3} alt="test" />,
  <img width="80px" height="160px" src={ka1} alt="test" />,  
  <img width="80px" height="160px" src={ka2} alt="test" />,  
  <img width="80px" height="160px" src={ka3} alt="test" />,  
  <img width="80px" height="160px" src={ka1} alt="test" />,  
  <img width="80px" height="160px" src={ka2} alt="test" />,   
  <img width="80px" height="160px" src={ka3} alt="test" />,
  <img width="80px" height="160px" src={ka1} alt="test" />,  
  <img width="80px" height="160px" src={ka2} alt="test" />,  
  <img width="80px" height="160px" src={ka3} alt="test" />,  
  <img width="80px" height="160px" src={ka1} alt="test" />,  
  <img width="80px" height="160px" src={ka2} alt="test" />,   
  <img width="80px" height="160px" src={ka3} alt="test" />
];

export default function Pagenation() {
  const [pageNum, setPageNum] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const IMAGE_MAX_AMOUNT_PER_PAGE = 5;
  const MAX_PAGE_AMOUNT = Math.ceil(imgList.length / IMAGE_MAX_AMOUNT_PER_PAGE);

  const onNextPage = () => {
    if (pageNum < MAX_PAGE_AMOUNT) {
      setPageNum((prev) => {
        prev = prev + 1;
        setPageIndex(((prev - 1) * IMAGE_MAX_AMOUNT_PER_PAGE));
        return prev;
      });
    } 
  };
  
  const onPreviousPage = () => {
    if (pageNum > 1) {
      setPageNum((prev) => {
        prev = prev - 1;
        setPageIndex((prev - 1) * IMAGE_MAX_AMOUNT_PER_PAGE);
        return prev;
      });
    } 
  };

  const onFirstPage = () => {
    setPageNum(1);
    setPageIndex(0);
  };

  const onLastPage = () => {
    setPageNum(MAX_PAGE_AMOUNT);
    setPageIndex((MAX_PAGE_AMOUNT - 1) * IMAGE_MAX_AMOUNT_PER_PAGE);
  };

  console.log(pageNum, pageIndex)

  return (
    <div style={{border: "2px solid"}}>
      {imgList.slice(pageIndex, pageIndex + 5).map((item: any, key: number) => <div style={{display:"inline-block", padding:"10px"}}>{item}</div>)}

      <div>
        <button onClick={onFirstPage}>First Page</button>
        <button onClick={onPreviousPage}>Previous Page</button>
        <span>{pageNum}</span>
        <button onClick={onNextPage}>Next Page</button>
        <button onClick={onLastPage}>Last Page</button>
      </div>
    </div>
  );
};
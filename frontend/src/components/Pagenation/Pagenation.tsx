import React,{useState} from "react";
import {ChakraProvider, Box, Flex, Text, Button, Spacer} from "@chakra-ui/react";
import PagenationModal from "./PagenationModal"

import ka1 from "./ka1.svg";
import ka2 from "./ka2.svg";
import ka3 from "./ka3.png";

const imgList: string[] = [ ka1, ka2, ka3, ka1, ka2, ka3 ];

export default function Pagenation() {
  const [pageNum, setPageNum] = useState(1);
  const [pageIndex, setPageIndex] = useState(0);
  const IMAGE_MAX_AMOUNT_PER_PAGE = 3;
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
  
  return (
    <ChakraProvider>
      <Box maxW="100%" >
        <Flex maxW="100%" alignItems="center" gap="1">
          {imgList.slice(pageIndex, pageIndex + 5).map((item: string, key: number) => <PagenationModal key={key} item={item} /> )}
        </Flex>
        <Flex marginTop="0.5rem" maxW="100%" alignItems="center">
            <Button height="0.6%" maxW="1%" bg='f2f2f2' color="black" onClick={onFirstPage}>{"<<"}</Button>
            <Spacer />
            <Button height="0.6%" maxW="1%" bg='f2f2f2' color="black" onClick={onPreviousPage}>{"<"}</Button>
            <Spacer />
            <Text  fontSize="m" fontWeight="semibold" lineHeight="short">{pageNum}</Text>
            <Spacer />
            <Button height="0.6%" maxW="1%" bg='f2f2f2' color="black" onClick={onNextPage}>{">"}</Button>
            <Spacer />
            <Button height="0.6%" maxW="1%" bg='f2f2f2' color="black" onClick={onLastPage}>{">>"}</Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
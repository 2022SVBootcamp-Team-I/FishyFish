import React,{useState} from "react";
import {ChakraProvider, Box, Image, Flex, Text, Button, Spacer } from "@chakra-ui/react";


import ka1 from "./ka1.svg";
import ka2 from "./ka2.svg";
import ka3 from "./ka3.png";

const imgList: any = [ 
  <Image w="19.5%" h="30%" borderRadius="md" src={ka2} />,  
  <Image w="19.5%" h="30%" borderRadius="md" src={ka1} />,  
  <Image w="19.5%" h="30%" borderRadius="md" src={ka3} />,  
  <Image w="19.5%" h="30%" borderRadius="md" src={ka1} />,  
  <Image w="19.5%" h="30%" borderRadius="md" src={ka2} />,   
  <Image w="19.5%" h="30%" borderRadius="md" src={ka3} />,
  <Image w="19.5%" h="30%" borderRadius="md" src={ka1} />,  
  <Image w="19.5%" h="30%" borderRadius="md" src={ka2} />,  
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

  return (
    <ChakraProvider>
      <Box maxW="100%" borderWidth="1px">
        <Flex maxW="100%" alignItems="center" gap="1">
          {imgList.slice(pageIndex, pageIndex + 5).map((item: any, key: number) => item)}
        </Flex>
        <Flex maxW="100%" alignItems="center">
            <Button maxW="25%" onClick={onFirstPage}>{"<<"}</Button>
            <Spacer />
            <Button maxW="25%" onClick={onPreviousPage}>{"<"}</Button>
            <Spacer />
            <Text>{pageNum}</Text>
            <Spacer />
            <Button maxW="25%" onClick={onNextPage}>{">"}</Button>
            <Spacer />
            <Button maxW="25%" onClick={onLastPage}>{">>"}</Button>
          </Flex>
      </Box>
    </ChakraProvider>
  );
};
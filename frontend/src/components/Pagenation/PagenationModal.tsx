import React from "react";
import { useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image
} from '@chakra-ui/react'

export default function PagenationModal({item}: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <Image w="32.8%" h="16.8rem" borderRadius="md" onClick={onOpen} src={item} _hover={{transform: "translateY(-10px)"}} />
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image borderRadius="md" src={item} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
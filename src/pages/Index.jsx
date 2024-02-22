import { useState } from "react";
import { ChakraProvider, Box, Textarea, Button, VStack, Heading, useToast } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const Index = () => {
  const [note, setNote] = useState("");
  const toast = useToast();

  const handleSaveNote = () => {
    // In a real-world application, you would save the note to a backend server or local storage.
    // For this example, we will just display a toast notification.
    toast({
      title: "Note saved.",
      description: "We've saved your note.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <VStack spacing={5} p={5}>
        <Heading>Quick Note</Heading>
        <Textarea placeholder="Write your note here..." value={note} onChange={(e) => setNote(e.target.value)} size="md" resize="vertical" />
        <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSaveNote}>
          Save Note
        </Button>
      </VStack>
    </ChakraProvider>
  );
};

export default Index;

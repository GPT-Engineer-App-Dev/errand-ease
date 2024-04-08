// Complete the Index page component here
// Use chakra-ui
import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

const Index = () => {
  const todos = ["Walk the dog", "Buy groceries", "Do laundry", "Clean the house"];

  return (
    <Box>
      <UnorderedList>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default Index;

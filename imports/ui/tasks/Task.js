import React from 'react';
import { Box, Button, HStack, Stack, Checkbox } from '@chakra-ui/react';

export const Task = ({ task, onMarkAsDone, onDelete }) => (
  <HStack mt={4}>
    <Box w="70%">
      
        {task.description}
      
    </Box>
    <Box w="30%">
    
        by-{task.userId}
    </Box>
 
  </HStack>
);

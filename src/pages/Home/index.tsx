import React, { useState } from 'react';
import { Center, Flex, Input, Text, Button, Stack } from '@chakra-ui/react';

export default function Home() {
  const [numbersToDraw, setNumbersToDraw] = useState<number>(1);
  const [minNumber, setMinNumber] = useState<number>(1);
  const [maxNumber, setMaxNumber] = useState<number>(100);

  return (
    <Flex
      background="sorteador.900"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width={640} direction="column" p={14} rounded={8}>
        <Center mb={4}>
          <Text fontSize="3xl" fontWeight="bold" color="orange.900">
            Sorteador
          </Text>
        </Center>

        <Flex justifyContent="space-around" alignItems="center" mb={4}>
          <Text fontSize="2xl" color="white">
            Sortear
          </Text>
          <Input
            type="number"
            htmlSize={4}
            width="auto"
            bg="sorteador.900"
            color="white"
            value={numbersToDraw}
            onChange={(e) => setNumbersToDraw(Number(e.target.value))}
          />
          <Text fontSize="2xl" color="white">
            números
          </Text>
        </Flex>

        <Stack direction="row" spacing={4} align="center" mb={4}>
          <Text fontSize="2xl" color="white">
            Entre
          </Text>
          <Input
            type="number"
            htmlSize={4}
            width="auto"
            bg="sorteador.900"
            color="white"
            value={minNumber}
            onChange={(e) => setMinNumber(Number(e.target.value))}
          />
          <Text fontSize="2xl" color="white">
            e
          </Text>
          <Input
            type="number"
            htmlSize={4}
            width="auto"
            bg="sorteador.900"
            color="white"
            value={maxNumber}
            onChange={(e) => setMaxNumber(Number(e.target.value))}
          />
        </Stack>

        <Button
          background="button.cta"
          mb={6}
          color="gray.900"
          size="lg"
          _hover={{ bg: '#FFB13E' }}
        >
          Sortear números
        </Button>
      </Flex>
    </Flex>
  );
}

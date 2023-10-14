import React, { useState } from 'react';
import {
  Center,
  Flex,
  Input,
  Text,
  Button,
  Stack,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Checkbox,
  CheckboxGroup,
} from '@chakra-ui/react';
import { toast } from 'react-toastify';

export default function Home() {
  const [numbersToDraw, setNumbersToDraw] = useState<number>(1);
  const [minNumber, setMinNumber] = useState<number>(1);
  const [maxNumber, setMaxNumber] = useState<number>(100);
  const [listNumbers, setListNumbers] = useState<Array<number>>([]);
  const [orderAsc, setOrderAsc] = useState<boolean>(false);
  const [allowRepeat, setAllowRepeat] = useState<boolean>(false);

  function getRandomNumberBetween(min: number, max: number) {
    return Math.ceil(Math.random() * (max - min) + min);
  }

  function handleDrawNumbers() {
    const list: number[] = [];

    for (let index = 0; index < numbersToDraw; index++) {
      let num = getRandomNumberBetween(minNumber, maxNumber);

      if (allowRepeat) {
        if (list.indexOf(num) === -1) {
          list.push(num);
          continue;
        } else {
          index--;
          continue;
        }
      }

      list.push(num);
    }

    if (orderAsc) {
      setListNumbers(list.sort());
      return;
    }

    setListNumbers(list);
  }

  function handleClear() {
    setListNumbers([]);
  }

  function handleCopy() {
    navigator.clipboard
      .writeText(listNumbers.toString().replaceAll(',', '-'))
      .then(() => {
        toast.success('Sorteio copiado!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      });
  }

  return (
    <Flex
      background="sorteador.900"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Flex width={640} direction="column" p={14} rounded={8}>
        {listNumbers.length === 0 && (
          <>
            <Center mb={4}>
              <Text fontSize="3xl" fontWeight="bold" color="orange.900">
                Sorteador
              </Text>
            </Center>

            <Stack direction="row" spacing={4} align="center" mb={4}>
              <Text fontSize="2xl" color="white">
                Sortear
              </Text>
              <Input
                type="number"
                background="barber.400"
                variant="filled"
                size="lg"
                border="1px"
                bg="sorteador.900"
                color="white"
                value={numbersToDraw}
                onChange={(e) => setNumbersToDraw(Number(e.target.value))}
              />
              <Text fontSize="2xl" color="white">
                número{numbersToDraw > 1 ? 's' : ''}
              </Text>
            </Stack>

            <Stack direction="row" spacing={4} align="center" mb={4}>
              <Text fontSize="2xl" color="white">
                Entre
              </Text>
              <Input
                type="number"
                background="barber.400"
                variant="filled"
                size="lg"
                border="1px"
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
                background="barber.400"
                variant="filled"
                size="lg"
                border="1px"
                bg="sorteador.900"
                color="white"
                value={maxNumber}
                onChange={(e) => setMaxNumber(Number(e.target.value))}
              />
            </Stack>

            <Stack
              spacing={5}
              direction="row"
              align="center"
              mb={4}
              color="white"
            >
              <Checkbox
                colorScheme="orange"
                isChecked={orderAsc}
                onChange={(e) => setOrderAsc(e.target.checked)}
              >
                Ordenar Números
              </Checkbox>
              <Checkbox
                colorScheme="orange"
                isChecked={allowRepeat}
                onChange={(e) => setAllowRepeat(e.target.checked)}
              >
                Não Permitir Repetição
              </Checkbox>
            </Stack>

            <Button
              background="button.cta"
              mb={6}
              color="gray.900"
              size="lg"
              _hover={{ bg: '#FFB13E' }}
              onClick={handleDrawNumbers}
            >
              Sortear números
            </Button>
          </>
        )}

        {listNumbers.length > 0 && (
          <Card align="center" bg="gray.500">
            <CardHeader>
              <Heading size="md" color="white">
                Resultado do Sorteio:
              </Heading>
            </CardHeader>
            <CardBody>
              <Stack
                direction="row"
                spacing={2}
                align="center"
                mb={4}
                wrap="wrap"
              >
                {listNumbers.map((number, index) => (
                  <Text
                    key={index}
                    bg="sorteador.100"
                    fontWeight="bold"
                    p={2}
                    rounded="50%"
                  >
                    {number < 10 ? `0${number}` : number}
                  </Text>
                ))}
              </Stack>
            </CardBody>
            <CardFooter>
              <Button colorScheme="yellow" onClick={handleClear} mr={2}>
                Novo Sorteio
              </Button>
              <Button colorScheme="green" onClick={handleCopy}>
                Copiar números
              </Button>
            </CardFooter>
          </Card>
        )}
      </Flex>
    </Flex>
  );
}

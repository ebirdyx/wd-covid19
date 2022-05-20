import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(signin({ username, password }));
    navigate('/home');
  };

  return (
    <Stack
      bg="gray.800"
      color={'white'}
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input type="username" onChange={onUsernameChange} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={onPasswordChange} />
          </FormControl>
          <Stack spacing={6}>
            <Button
              mt="10px"
              colorScheme={'blue'}
              variant={'solid'}
              onClick={onSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'fit'}
          src={
            'https://images.unsplash.com/photo-1598182232530-a1ce76ab6f40?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1134'
          }
        />
      </Flex>
    </Stack>
  );
}

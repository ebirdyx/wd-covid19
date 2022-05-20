import {
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuDivider,
  MenuList,
  Center,
  Avatar,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { signout } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function ChakraNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = (event) => {
    event.preventDefault();
    dispatch(signout());
    navigate('/signin');
  };

  const fullname = useSelector((state) => state.auth.user.fullname);
  const username = useSelector((state) => state.auth.user.username);
  const avatarUrl = `https://avatars.dicebear.com/api/pixel-art/${username}.svg`;

  return (
    <Box
      sx={{
        position: '-webkit-sticky',
        /* Safari */ position: 'sticky',
        top: '0',
      }}
    >
      <Flex
        // bg="#d3e1eb"
        bg="#035d71"
        color="white"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          ml="5"
          align="center"
          justify={{ base: 'center', md: 'start' }}
        >
          <Image
            mr="10px"
            borderRadius="full"
            boxSize="30px"
            src="images/Logo.png"
            alt="Logo"
          />
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            fontSize={'xl'}
            color="white"
          >
            Covid19 Info
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={60}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
            >
              <Avatar size={'sm'} src={avatarUrl} />
            </MenuButton>
            <MenuList alignItems={'center'} bg="#035d71" color="white">
              <br />
              <Center>
                <Avatar size={'2xl'} src={avatarUrl} />
              </Center>
              <br />
              <Center>
                <p>{fullname}</p>
              </Center>
              <br />
              <MenuDivider />
              <MenuItem>Profile</MenuItem>
              <MenuItem>Account Settings</MenuItem>
              <MenuItem onClick={onSignOut} as="button">
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('white.800', 'white');
  const linkHoverColor = useColorModeValue('gray.800');
  const popoverContentBgColor = useColorModeValue('gray.800', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={600}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: '#2981b4' }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#2981b4.400' }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={'md'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'#2981b4'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

export default ChakraNavbar;

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/home',
    children: [
      {
        label: 'Prevention',
        subLabel: 'Check out article with prevention tips',
        href: '#',
      },
      {
        label: 'Covid19 News',
        subLabel: 'Reference to external news',
        href: '#',
      },
    ],
  },
  {
    label: 'Advice',
    href: '/advice',
    children: [
      {
        label: 'Hygiene',
        subLabel: 'Wash your hands',
        href: '/advice/1',
      },
      {
        label: 'Covid-19 Symptoms',
        subLabel: 'Understand symptoms ',
        href: '#',
      },
    ],
  },
  {
    label: 'Vaccine',
    href: '/vaccine',
  },
  {
    label: 'Statistics',
    href: '/stats',
  },
];

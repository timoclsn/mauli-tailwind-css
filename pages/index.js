import { Twitter } from 'react-feather';

import Box from '../components/Box';
import Button from '../components/Button';
import Card from '../components/Card';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Inline from '../components/Inline';
import Stack from '../components/Stack';
import Text from '../components/Text';

export default function Mauli() {
  return (
    <Container size="large">
      <Box inset={['small', 'medium', 'large']}>
        <Stack fullWidth>
          <Stack
            direction={['vertical', 'horizontal', 'vertical']}
            space={['small', 'medium', 'large']}
            fullWidth
          >
            <Button variant="solid">Solid</Button>
            <Button variant="solid">Solid</Button>
            <Button variant="solid">
              <Twitter />
              Icon
            </Button>
            <Button variant="solid">
              <Twitter />
            </Button>
            <Button variant="ghost">
              <Twitter />
            </Button>
            <Button variant="ghost">
              <Twitter />
              Icon
            </Button>
            <Button variant="solid" disabled>
              Disabled
            </Button>
            <Button
              as="a"
              variant="solid"
              href="https://timoclasen.de"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </Button>
            <Button variant="ghost">Ghost</Button>
          </Stack>
          <Stack direction="horizontal" fullWidth>
            <Card fullWidth>
              <Text>Card 1</Text>
            </Card>
            <Card inset="large" fullWidth>
              <Text>Card 2</Text>
            </Card>
          </Stack>
          <Stack direction="horizontal">
            <Stack>
              <Heading as="h1" size="large">
                Heading 1
              </Heading>
              <Heading as="h2" size="medium">
                Heading 2
              </Heading>
              <Heading as="h3" size={['small', 'medium', 'large']}>
                Heading 3
              </Heading>
            </Stack>
            <Stack>
              <Text as="p" size="large">
                Das ist ein Text
              </Text>
              <Text as="p" size="medium">
                Das ist ein Text
              </Text>
              <Text as="p" size={['small', 'medium', 'large']}>
                Das ist ein Text
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Inline space={['small', 'medium', 'large']}>
        <Button variant="solid">Solid</Button>
        <Button variant="solid">Solid</Button>
        <Button variant="solid">Solid</Button>
        <Button variant="solid">Solid</Button>
        <Button variant="solid">Solid</Button>
        <Button variant="solid">Solid</Button>
      </Inline>
    </Container>
  );
}

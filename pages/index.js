import { Box, Container, Heading, Button, Input, Flex } from 'theme-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Icon from '@hackclub/icons'

export default function App() {
  const router = useRouter()
  return (
    <Box>
      {router.query.signedup && (
        <Box
          bg={'#56ca53'}
          color={'white'}
          sx={{ textAlign: 'center', py: 2, fontWeight: 600, fontSize: 2 }}
        >
          Succesfully signed up for updates!
        </Box>
      )}
      <Head>
        <meta property="og:site_name" content="CodeDay" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://event.codeday.org/apple-touch-icon.png"
        />
        <meta
          property="og:image"
          content="https://f2.codeday.org/d5pti1xheuyu/2esqghno5k8kTWXpaQfdLX/39132e429ced0d6062bae80e4f82f21a/377780_10151151458906332_289308676_n.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://event.codeday.org/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://event.codeday.org/favicon-16x16.png"
        />
        <link
          rel="manifest"
          href="https://event.codeday.org/site.webmanifest"
        />
        <link
          rel="mask-icon"
          href="https://event.codeday.org/safari-pinned-tab.svg"
          color="#ff686b"
        />
        <meta name="msapplication-TileColor" content="#ff686b" />
        <meta name="theme-color" content="#ffffff" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CodeDay Singapore</title>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="description"
          content="CodeDay is an event where students get together to build apps and games and have a lot of fun."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@codeday" />
        <meta name="twitter:creator" content="@codeday" />
        <meta property="og:title" content="CodeDay Singapore" />
        <meta
          property="og:description"
          content="CodeDay is an event where students get together to build apps and games and have a lot of fun."
        />
        <meta property="og:url" content="https://event.codeday.org/singapore" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="CodeDay" />
        <link rel="canonical" href="https://event.codeday.org/singapore" />
      </Head>
      <Box
        sx={{
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
          backgroundImage:
            'linear-gradient(90deg, rgba(0, 0, 22,0.80) 35%, rgba(0, 0, 18,0.65) 100%), url(https://hackclub.com/pattern.svg),url(https://cloud-diyr52p88-hack-club-bot.vercel.app/020220312_124621.jpg)'
        }}
      >
        <Container py={5} sx={{ minHeight: '90vh', textAlign: 'center', px: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{minWidth: ['200px', '400px', '600px']}}>
            <img
              src="https://cloud-i7e0fez7u-hack-club-bot.vercel.app/0codeday-notext-white.png"
              height="90px"
            />
            <Heading
              color="white"
              sx={{ fontSize: [3, 5], fontWeight: 800, my: 3 }}
            >
              Thank you Singapore!
            </Heading>
            <Flex
              as="form"
              method="POST"
              action="https://airtable-forms-proxy.innovationcircuit.co/api/appD6mrDPbe6cLQeP/Registrations?redirect=https://codeday.sg?signedup=true"
              sx={{ maxWidth: '600px', margin: 'auto' }}
            >
              <Input
                sx={{
                  borderRadius: 6,
                  mx: 2,
                  mb: 2,
                  fontSize: 2,
                  bg: 'transparent',
                  color: 'white',
                  border: '2.5px solid',
                  borderColor: 'white',
                  color: 'white',
                  bg: 'rgba(0, 0, 18, 0.6)'
                }}
                name="Email"
                placeholder="Enter your email for updates about next season"
              />
              <Button
                sx={{
                  width: '52px',
                  borderRadius: 6,
                  mx: 2,
                  mb: 2,
                  fontSize: 2,
                  p: 1,
                  '> svg': { m: 0 },
                  bg: 'rgba(0, 0, 18, 0.6)',
                  border: '2.5px solid',
                  borderColor: 'white',
                  color: 'white'
                }}
              >
                <Icon glyph="send" size={32} />
              </Button>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

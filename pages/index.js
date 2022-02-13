import { Box, Container, Heading, Button, Input, Flex } from 'theme-ui'
import Lead from '../components/lead.mdx'
import Follow from '../components/follow.mdx'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App() {
  const router = useRouter()
  return (
    <Box>
      {router.query.signedup && <Box bg={'#56ca53'} color={'white'} sx={{textAlign: 'center', py:2, fontWeight: 600, fontSize: 2}}>Succesfully signed up for CodeDay Singapore!</Box>}
      <Head>
        <script src="https://embed.small.chat/TKM55CBL5C02UQJDS0MA.js" />
        <meta property="og:site_name" content="CodeDay" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://event.codeday.org/apple-touch-icon.png"
        />
        <meta property="og:image" content="https://f2.codeday.org/d5pti1xheuyu/2esqghno5k8kTWXpaQfdLX/39132e429ced0d6062bae80e4f82f21a/377780_10151151458906332_289308676_n.jpg" />
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
          backgroundImage:
            'linear-gradient(90deg, rgba(166, 66, 68,0.8217261904761905) 35%, rgba(166, 66, 68,0.6713060224089635) 100%), url(https://hackclub.com/pattern.svg),url(https://f2.codeday.org/d5pti1xheuyu/2esqghno5k8kTWXpaQfdLX/39132e429ced0d6062bae80e4f82f21a/377780_10151151458906332_289308676_n.jpg)'
        }}
      >
        <Container py={5} sx={{ textAlign: 'center', px: 0 }}>
          <Heading
            color="white"
            sx={{
              fontSize: [3, 5],
              fontWeight: 800,
              textTransform: 'uppercase'
            }}
          >
            March 12th, 12pm to 9pm
          </Heading>
          <Heading
            color="white"
            sx={{ fontSize: [5, 7], fontWeight: 800, my: 2 }}
          >
            CODEDAY SINGAPORE
          </Heading>
          <Button
            bg={'#56ca53'}
            as="a"
            href="#submit"
            sx={{ borderRadius: 6, mx: 2, mb: 2, fontSize: 2 }}
          >
            Register Now (Free)
          </Button>
          <Button
            bg={'#56ca53'}
            as="a"
            href="mailto:sampoder@codeday.org"
            sx={{ borderRadius: 6, mx: 2, mb: 2, fontSize: 2 }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
      <Container variant="copy" my={3} sx={{ fontSize: 2 }}>
        <Lead />
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          💡 Come up with ideas.
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          👋 Find a team.
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          🛠 Start building it! (Beginner workshops - no experience needed!)
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          🙋‍♀️ Get help from mentors as needed.
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          🎮 Join fun activities and competitions... with prizes!
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          mb={3}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          👏 Show off what you made.
        </Box>
        <Follow />
        <Box
          bg="snow"
          p={2}
          my={2}
          mt={3}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          💉 Attendees must have fully vaccinated status on TraceTogether.
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          😷 Masks must be worn throughout the event (N95 masks will be
          provided).
        </Box>
        <Box
          bg="snow"
          p={2}
          my={2}
          sx={{ border: '1px solid', borderColor: 'sunken', borderRadius: 6 }}
        >
          🌡 Temperature checks will be performed at the venue.
        </Box>
      </Container>
      <Box bg="primary" color="white" py={4}>
        <Container variant="copy">
          <Heading mb={2} sx={{ fontSize: 4 }}>
            Register for CodeDay
          </Heading>
          <Box
            id="submit"
            as="form"
            method="POST"
            action="https://airtable-forms-proxy.innovationcircuit.co/api/appD6mrDPbe6cLQeP/Registrations?redirect=https://codeday-sg.innovationcircuit.co?signedup=true"
            sx={{
              fontSize: 2,
              py: 0,
              display: 'grid',
              gap: '12px'
            }}
          >
            <Box sx={{}}>
              <small>Your Name</small>
              <Input
                name="Name"
                bg="white"
                required
                sx={{
                  border: '0.1px solid',
                  borderColor: 'sunken'
                }}
              />
            </Box>
            <Box>
              <small>Contact Email</small>
              <Input
                bg="white"
                name="Email"
                required
                sx={{
                  border: '0.1px solid',
                  borderColor: 'sunken'
                }}
              />
            </Box>
            <Button
              sx={{
                justifyContent: 'left',
                width: 'fit-content',
                bg: 'white',
                color: 'black',
                borderRadius: '6px',
                fontSize: 1
              }}
            >
              Register for CodeDay
            </Button>
          </Box>
        </Container>
      </Box>
      <Container variant="copy" py={4}>
        <Heading mb={3} sx={{ fontSize: 3 }}>
          CodeDay Singapore is supported by:
        </Heading>
        <Flex sx={{ flexWrap: 'wrap' }}>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 2,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/WfvsNlLHumwYe28SCcCU6/abbe4892b7e0a88ebbceb22e5a256d62/lexisnexis.png"
              style={{ height: '48px', marginTop: '8px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: '20px',
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/12Yhg9hZPMcwkO2uuwQsQQ/62c54aa58b6824d020308ff5a0599367/statefarm.jpg"
              style={{ height: '32px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/5IEwNb8Nos0QOmw8CUm2mM/20d8c51049edec46fa507d63f7f430ee/kinesis.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/5lk5VRVYLmwe8O4s2uEsA/89a548d2fc6359dc1b4a133392e84d14/wsgr.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/5WBxa3nJDOAyoiI6kiyygO/b3f061e38482b7aaf028645ce1e425fb/fastly-logo_0.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/14NXjBqdNmggcs2QyQMySM/a1ae58eeee95b247670e5e6bd86b157c/digikey.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/3GX8UoXcpGokg6yoCUmggK/d9cc5a1585558fc0d85aec37a2d346b9/contentful-dark.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/5XFtoq9OOY1qD0tTdh7f4h/c3af92d8f73ab6a28c65e6510dbc4ec6/auth0.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/1UNeYVG2ESZZwAGjGGkdfV/eea37a510227c7bd9755f2dceefb30ed/greenhouse.jpeg"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 3,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://f2.codeday.org/d5pti1xheuyu/6Dhp3qq1L7Asqeq5pWpqZO/73dff4feef2038c04c1c59866e01a587/tmobileZeichenfl__che_2_Kopie_5.png"
              style={{ height: '40px' }}
            />
          </Box>
          <Box
            sx={{
              border: '0.7px solid',
              borderColor: 'sunken',
              p: 2,
              mr: 2,
              mb: 2,
              objectFit: 'cover'
            }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/607fac9445a5c1682501e901/1618998829981-SFFKTKYZPUY78HI597WM/The+Projector+Solid+Black+logo.png"
              style={{ height: '56px' }}
            />
          </Box>
        </Flex>
      </Container>
      <Box bg="primary" color="white" py={3}>
        <Container variant="copy">
          Copyright 2009 – 2022 CodeDay. A 501(c)(3) nonprofit. EIN: 26-4742589.
        </Container>
      </Box>
    </Box>
  )
}

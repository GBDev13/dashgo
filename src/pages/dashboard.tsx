import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import Head from "next/head";
import { AnalyticsChart } from "../components/Chart";
import Header from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
    <Head>
      <title>Dashboard | dashgo.</title>
    </Head>
      <Header />
      
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <AnalyticsChart />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <AnalyticsChart />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
import React from "react";
import { Container, Title, Text, Card, Grid } from "@mantine/core";
import { motion } from "framer-motion";
import "@mantine/core/styles.css";
const MissionVision = () => {
  return (
    <Container size="lg" py="xl">
      <Title align="center" mb="lg">
        Our Mission and Vision
      </Title>

      <Grid>
        <Grid.Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card shadow="sm" padding="lg">
              <Title order={3} mb="md">
                Mission
              </Title>
              <Text>
                To actively engage students in the exploration and application
                of Artificial Intelligence and Blockchain technology by
                providing practical learning experiences, collaborative
                opportunities, and a supportive community. We aim to equip
                members with the skills and knowledge needed to thrive in these
                rapidly growing fields.
              </Text>
            </Card>
          </motion.div>
        </Grid.Col>

        <Grid.Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card shadow="sm" padding="lg">
              <Title order={3} mb="md">
                Vision
              </Title>
              <Text className="">
                To establish W3B as a vibrant and dynamic society where students
                are consistently involved in cutting-edge projects, leading to
                the creation of innovative solutions and a strong foundation in
                AI and Blockchain. Our goal is to be a driving force in
                preparing students for impactful careers in the tech industry.
              </Text>
            </Card>
          </motion.div>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default MissionVision;

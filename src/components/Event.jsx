import React from 'react';
import { Card, Title, Text } from '@mantine/core'; 
import { motion } from 'framer-motion'; // For animations
import "@mantine/core/styles.css";

const EventPage = () => {
  const today = new Date();

  
  const events = [
    { id: 1, name: 'Valorant ', date: '2024-10-15', description: 'Description for Event 1', imageUrl: 'https://store-images.s-microsoft.com/image/apps.21507.13663857844271189.4c1de202-3961-4c40-a0aa-7f4f1388775a.20ed7782-0eda-4f9d-b421-4cc47492edc6' },
    { id: 4, name: 'Event 4', date: '2024-11-30', description: 'Description for Event 4', imageUrl: 'https://via.placeholder.com/400' },
  ];

  const upcomingEvents = events.filter(event => new Date(event.date) > today);
  const pastEvents = events.filter(event => new Date(event.date) <= today);

  return (
    <div className="container mx-auto py-10">
      {/* Upcoming Events */}
      <section>
        <Title className="mt-20  text-3xl font-bold text-center">Upcoming Events</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <Card
                  shadow="sm" // Use Mantine's "sm" shadow size
                  radius="lg"
                  padding="lg"
                  className="w-72 h-auto bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    {/* Image with Tailwind's overflow-hidden and object-cover */}
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* Event Info */}
                  <Title className="text-lg">{event.name}</Title>
                  <Text className="text-gray-500">{event.date}</Text>
                  <Text>{event.description}</Text>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full">No upcoming events.</p>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="mt-10">
        <Title className="text-3xl font-bold mb-5 text-center">Past Events</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.length > 0 ? (
            pastEvents.map(event => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <Card
                  shadow="sm" // Use Mantine's "sm" shadow size
                  radius="lg"
                  padding="lg"
                  className="w-72 h-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    {/* Image with Tailwind's overflow-hidden and object-cover */}
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  {/* Event Info */}
                  <Title className="text-lg">{event.name}</Title>
                  <Text className="text-gray-500">{event.date}</Text>
                  <Text>{event.description}</Text>
                </Card>
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full">No past events.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default EventPage;

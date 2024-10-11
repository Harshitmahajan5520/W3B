
import React, { useEffect, useState } from 'react';
import { Card, Title, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import axios from 'axios'; // For making API requests

const EventPage = () => {
  const today = new Date();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch events from backend
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/events'); // Backend running on port 3000
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const upcomingEvents = events.filter(event => new Date(event.date) > today);
  const pastEvents = events.filter(event => new Date(event.date) <= today);

  if (loading) {
    return <p>Loading events...</p>;
  }

  return (
    <div className="container mx-auto py-10">
      {/* Upcoming Events */}
      <section>
        <Title className="mt-20 mb-10 text-3xl font-bold text-center">Upcoming Events</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map(event => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <Card
                  shadow="sm"
                  radius="lg"
                  padding="lg"
                  className="w-72 h-auto bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
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
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-2"
              >
                <Card
                  shadow="sm"
                  radius="lg"
                  padding="lg"
                  className="w-72 h-auto bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="overflow-hidden rounded-lg mb-4">
                    <img
                      src={event.imageUrl}
                      alt={event.name}
                      className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
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


// CommentPage.jsx
import React, { useState } from 'react';
import { TextInput, Button, Card, Title, Text } from '@mantine/core';

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
        {/* Side Navbar */}
        <nav className="w-2/12 bg-white shadow-lg p-4">
            <Title order={4} className="mb-4">Navigation</Title>
            <ul>
                <li className="mb-2"><a href="#home" className="text-blue-500">Home</a></li>
                <li className="mb-2"><a href="#about" className="text-blue-500">About</a></li>
                <li className="mb-2"><a href="#comments" className="text-blue-500">Comments</a></li>
                <li className="mb-2"><a href="#contact" className="text-blue-500">Contact</a></li>
            </ul>
        </nav>

        {/* Main Content Area */}
        <div className="flex flex-1">
            {/* Display Section */}
            <div className="flex-1 overflow-y-auto p-4">
            <Card>
                <Title order={3} className="mb-4">Comments</Title>
                {comments.length > 0 ? (
                comments.map((comment, index) => (
                    <Card key={index} className="mb-2 p-4 bg-white shadow">
                    <Text>{comment}</Text>
                    </Card>
                ))
                ) : (
                <Text>No comments yet.</Text>
                )}
            </Card>
            </div>

            {/* Input Section */}
            <div className="flex flex-col-reverse w-4/12 bg-blue-300">
                <div className="p-4 bg-green-300 h-1/12">
                    <form onSubmit={handleCommentSubmit} className="flex">
                        <TextInput
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Write a comment..."
                        className="flex-1 mr-2"
                        />
                        <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                        Submit
                        </Button>
                    </form>
                </div>

                <div className="bg-gray-500 shadow-lg p-4 h-5/6">
                    <Title order={4} className="mb-4">User Info</Title>
                    <div className="flex items-center mb-4">
                        <div>
                            <Text className="font-semibold">John Doe</Text>
                            <Text className="text-sm text-gray-600">User since 2021</Text>
                        </div>
                        <img
                        src="https://via.placeholder.com/50" // Replace with your image URL
                        alt="Profile"
                        className="rounded-full ml-6"
                        />
                    </div>
                    <Text>
                        Here you can add some helpful information for users.
                    </Text>
                    <Text className="mt-2">
                        Guidelines:
                        <ul className="list-disc list-inside">
                            <li>Be respectful in your comments.</li>
                            <li>No spam or promotional content.</li>
                            <li>Stay on topic and be constructive.</li>
                        </ul>
                    </Text>
                </div>

                            
            </div>
        </div>
    </div>
  );
};

export default CommentPage;

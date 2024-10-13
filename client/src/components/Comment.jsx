import React, { useState } from 'react';
import { TextInput, Button, Card, Title, Text , Menu } from '@mantine/core';

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

  // State to control sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function for sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // State to control Infobar visibility
  const [isInfobarOpen, setIsInfobarOpen] = useState(true);

  // Toggle function for Infobar
  const toggleInfobar = () => {
    setIsInfobarOpen(!isInfobarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 h-svh">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-2/5 bg-gray-800 z-20 text-white p-2 md:hidden transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6">
          Navbar
          <button
          className="bg-blue-500 text-white ml-2 px-4 py-2 rounded-md md:hidden"
          onClick={toggleSidebar}
          >
              IIBack
          </button>
        </h2>
        <ul>
          <li className="py-2 px-4 hover:bg-gray-700 rounded">Home</li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded">Profile</li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded">Settings</li>
          <li className="py-2 px-4 hover:bg-gray-700 rounded">Logout</li>
        </ul>
      </div>

      {/* Infobar */}
      <div
        className={`fixed inset-y-0 right-0 w-2/5 bg-green-300 z-20 text-white p-2 md:hidden transform transition-transform duration-300 ease-in-out ${
          isInfobarOpen ? 'translate-x-full' : '-translate-x-0'
        } md:relative md:translate-x-full`}
      >
        <div className="bg-gray-500 shadow-lg h-5/6">
            <Title order={4} className="mb-4">User Info</Title>
            <div className="flex items-center mb-4">
                <div>
                    <Text className="font-semibold">John Doe</Text>
                    <Text className="text-sm text-gray-600">User since 2021</Text>
                </div>
                <img
                src="https://via.placeholder.com/100" // Replace with your image URL
                alt="Profile"
                className="rounded-full ml-6"
                onClick={toggleInfobar}
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
        

      {/* Comments section for mobiles */}
      {/* Header */}
      <div className='bg-gray-400/90 rounded-lg fixed z-10 w-11/12 flex justify-between px-3 py-2 top-2 mx-5 md:hidden'>
        <button
          className=" bg-blue-500 text-white px-4 py-2 rounded-md md:hidden"
          onClick={toggleSidebar}
        >
          XN
        </button>
        <img
                src="https://via.placeholder.com/40" // Replace with your image URL
                alt="Profile"
                className="rounded-full"
                onClick={toggleInfobar}
                />
      </div>

      <div className=" bg-gray-700 shadow-md md:hidden flex-1 overflow-y-auto h-full">
            <Card>
                <Title order={3} className="mb-4 mt-10">Comments</Title>
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
            <div className="p-2 bg-green-300 fixed w-full bottom-0">
                <form onSubmit={handleCommentSubmit} className="flex">
                    <TextInput
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 mr-2"
                    />
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-2/6 text-xl/ p-0 m-0">
                    Submit
                    </Button>
                </form>
            </div>
        </div>

      {/* Main layout for larger screens */}
      <div className="hidden md:flex flex-row h-full">
        {/* Sidebar */}
        <div className="w-2/12 p-4 bg-gray-200 shadow-lg">
                <Title order={4} className="mb-4">Navigation</Title>
                <ul>
                    <li className="mb-2"><a href="#home" className="text-blue-500">Home</a></li>
                    <li className="mb-2"><a href="#about" className="text-blue-500">About</a></li>
                    <li className="mb-2"><a href="#comments" className="text-blue-500">Comments</a></li>
                    <li className="mb-2"><a href="#contact" className="text-blue-500">Contact</a></li>
                </ul>
        </div>

        {/* Comments section */}
        <div className="w-7/12 p-4 bg-white shadow-md flex-1 overflow-y-auto">
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

        {/* User Info */}
        <div className="w-3/12 bg-gray-200 flex flex-col justify-between h-lvh">
            <div className="bg-gray-500 shadow-lg p-4 flex-1">
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

            <div className="p-2 bg-green-300">
                <form onSubmit={handleCommentSubmit} className="flex">
                    <TextInput
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 mr-2"
                    />
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-2/6 text-xl/ p-0 m-0">
                    Submit
                    </Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPage;
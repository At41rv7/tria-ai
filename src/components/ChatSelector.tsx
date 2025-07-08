import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageCircle, ArrowLeft, Users, Brain, Settings } from 'lucide-react';
import { useAuth } from '../contexts/HybridAuthContext';
import UserButton from './UserButton';

const ChatSelector = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-sm shadow-lg border-b border-gray-200 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center text-gray-600 hover:text-gray-800 transition-all duration-200 hover:scale-105"
          >
            <ArrowLeft size={18} className="mr-1 sm:mr-2" />
            <span className="font-medium text-sm sm:text-base">Back to Home</span>
          </Link>
          
          <div className="text-center flex-1 mx-2 sm:mx-4">
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800">
              Choose Your Experience
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">Select your preferred chat mode</p>
          </div>
          
          <div className="flex items-center space-x-1 sm:space-x-2">
            {currentUser && (
              <Link 
                to="/settings" 
                className="p-2 text-gray-600 hover:text-gray-800 transition-colors rounded-lg hover:bg-gray-100"
              >
                <Settings size={18} />
              </Link>
            )}
            <UserButton />
          </div>
        </div>
      </div>

      {/* Chat Options */}
      <div className="flex-1 flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-6 sm:mb-8 lg:mb-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-4">
              How would you like to chat today?
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              Choose between engaging conversation with Leo and Max or personalized learning assistance
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Leo & Max Conversation - Top Priority */}
            <Link 
              to="/chat"
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <MessageCircle className="text-white" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">Conversation with Leo & Max</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-6 px-2">
                  Engage in dynamic three-way conversations with Leo and Max - two distinct AI personalities 
                  that bring intelligence, humor, and engaging dialogue to every interaction.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4">
                  <div className="flex items-center justify-center text-gray-600 bg-gray-100 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full">
                    <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">Dynamic Conversations</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 bg-gray-100 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">AI Personalities</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Study Mode - Secondary */}
            <Link 
              to="/study-chat"
              className="group bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="text-white" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3 lg:mb-4">Study Mode</h3>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-lg leading-relaxed mb-3 sm:mb-4 lg:mb-6 px-2">
                  AI tutors that work together in real-time to understand your unique learning style, pace, and curiosity, 
                  guiding you from confusion to mastery with personalized educational support.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-center space-y-2 sm:space-y-0 sm:space-x-2 lg:space-x-4">
                  <div className="flex items-center justify-center text-gray-600 bg-blue-50 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full">
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">Adaptive Learning</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600 bg-blue-50 px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    <span className="text-xs sm:text-sm font-medium">Personalized Tutoring</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* No Login Required Notice */}
          <div className="text-center mt-6 sm:mt-8">
            <div className="inline-flex items-center px-3 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-green-500" />
              <span className="text-xs sm:text-sm text-gray-600">
                No signup required - Start chatting instantly!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSelector;

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAdmin } from '../contexts/AdminContext';
import { X, Shield, User, Settings, Database } from 'lucide-react';

export const AdminModal: React.FC = () => {
  const { isAdminModalOpen, setIsAdminModalOpen } = useAdmin();

  const handleClose = () => {
    setIsAdminModalOpen(false);
  };

  return (
    <AnimatePresence>
      {isAdminModalOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Admin Panel</h2>
                    <p className="text-blue-100 text-sm">Development Mode</p>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="text-center py-8">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Demo Admin Interface
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                    This is a visual demonstration of an admin panel. In production, this would include authentication and management features.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Settings className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Site Configuration</span>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Database className="h-5 w-5 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Content Management</span>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    <strong>Keyboard Shortcut:</strong> Ctrl + Shift + A
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    This modal is for demonstration purposes only.
                  </p>
                </div>

                <button
                  onClick={handleClose}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Close Panel
                </button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
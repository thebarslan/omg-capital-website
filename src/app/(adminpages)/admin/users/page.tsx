"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "../../../contexts/AuthContext";

const Users = () => {
  const { users, deleteUser, updateUser, fetchAllUsers } = useUser();
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    userType: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user._id.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [users, searchTerm]);

  const handleEditClick = (user: any) => {
    setEditingUser(user._id);
    setEditForm({
      name: user.name,
      email: user.email,
      userType: user.userType,
    });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSaveClick = async () => {
    if (editingUser) {
      await updateUser(editingUser, editForm);
      setEditingUser(null);
      fetchAllUsers();
    }
  };

  const handleDeleteClick = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      fetchAllUsers();
    }
  };

  return (
    <div className="w-full flex flex-col h-auto flex-1">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold">USERS LIST</h5>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Search by ID or Username"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-1 rounded-sm text-sm"
          />
          <button
            onClick={() => setFilteredUsers(users)} // Resetting the search
            className="px-3 py-1 bg-blue-500 text-white rounded-sm text-sm"
          >
            Search
          </button>
        </div>
      </div>
      <div className="news-list w-full flex flex-col mt-8">
        <div className="top w-full flex justify-between bg-gray-400 h-[40px]">
          <div className="news-title w-auto flex items-center justify-start flex-[1] border-r">
            <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">User ID</h5>
          </div>
          <div className="news-title w-auto flex items-center justify-start flex-[3] border-r">
            <h5 className="lg:ml-6 ml-2 text-[12px] lg:text-[15px]">
              Username
            </h5>
          </div>
          <div className="news-date w-auto flex items-center flex-[1] justify-center border-r">
            <h5 className="text-[12px] lg:text-[15px]">Reg. Date</h5>
          </div>
          <div className="news-date w-auto flex items-center flex-[1] justify-center "></div>
        </div>

        {filteredUsers.length === 0 ? (
          <div className="no-news-message w-full flex justify-center items-center h-60">
            <p className="text-lg text-gray-500">No users available.</p>
          </div>
        ) : (
          <div className="news-list-inside w-full flex flex-col mt-6">
            {filteredUsers.map((user) => (
              <div
                key={user._id}
                className="news w-full flex justify-between h-[40px] even:bg-gray-300 odd:bg-gray-200"
              >
                {editingUser === user._id ? (
                  <>
                    <div className="news-title w-auto flex items-center justify-start flex-[1] border-r border-r-gray-400">
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                        className="w-full border-none outline-none bg-transparent pl-2 text-[12px] lg:text-[15px]"
                      />
                    </div>
                    <div className="news-title w-full flex-[3] flex items-center justify-start border-r border-r-gray-400">
                      <input
                        type="text"
                        name="email"
                        value={editForm.email}
                        onChange={handleEditChange}
                        className="w-full border-none outline-none bg-transparent pl-2 text-[12px] lg:text-[15px]"
                      />
                    </div>
                    <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400">
                      <input
                        type="text"
                        name="userType"
                        value={editForm.userType}
                        onChange={handleEditChange}
                        className="w-full border-none outline-none bg-transparent pl-2 text-[12px] lg:text-[15px]"
                      />
                    </div>
                    <div className="news-button w-auto flex items-center flex-[1] justify-center">
                      <button
                        className="lg:px-6 px-2 py-[2px] bg-green-400 rounded-lg text-[14px]"
                        onClick={handleSaveClick}
                      >
                        SAVE
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="news-title w-auto flex items-center justify-start flex-[1] border-r border-r-gray-400 ">
                      <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        {user._id}
                      </h5>
                    </div>
                    <div className="news-title w-full flex-[3] flex items-center justify-start border-r border-r-gray-400">
                      <h5 className="font-medium lg:text-[15px] lg:ml-6 text-[12px] ml-2">
                        {user.name}
                      </h5>
                    </div>
                    <div className="news-date w-auto flex items-center flex-[1] justify-center border-r border-r-gray-400 ">
                      <h5 className="font-medium lg:text-[15px]  text-[12px] ">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </h5>
                    </div>
                    <div className="news-button w-auto flex items-center flex-[1] justify-center ">
                      <button
                        className="lg:px-6 px-2 py-[2px] bg-green-400 rounded-lg text-[14px]"
                        onClick={() => handleEditClick(user)}
                      >
                        EDIT
                      </button>
                      <button
                        className="lg:px-6 px-2 py-[2px] bg-red-400 rounded-lg text-[14px] ml-2"
                        onClick={() => handleDeleteClick(user._id)}
                      >
                        DELETE
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;

"use client";

import Container from "@/app/components/common/container";
import React, { useEffect, useState } from "react";
import { useUser } from "../../contexts/AuthContext";
import { useRouter } from "next/navigation";

const Profile = () => {
  const { currentUser, logout, authState } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-auto team flex flex-col">
      <div className="slider w-full flex max-h-[300px] h-full">
        <div className="profile-item w-screen max-h-[300px] lg:h-[300px] md:h-[250px] h-[160px] relative">
          <div className="absolute left-0 top-0 bg-[#0000007a] w-full h-full z-[20]"></div>
          <div className="hero-bigger-container h-full w-full">
            <Container>
              <div className="hero-container w-full flex relative z-[200] lg:h-[300px] md:h-[250px] h-[160px] text-white items-center justify-between px-4">
                <h5 className="lg:text-6xl lg:font-extrabold font-bold lg:mb-12 text-2xl mb-4">
                  PROFILE
                </h5>
                <div className="flex items-center gap-4">
                  <span className="text-sm lg:text-lg mr-4 flex items-center">
                    Welcome, {currentUser?.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-1 bg-logoRed hover:bg-red-600 text-white rounded-lg text-sm lg:text-md transition-colors duration-300 flex items-center"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
      <div className="my-16 w-full flex flex-col h-auto">
        <Container>
          <div className="title-container w-full flex items-center justify-start">
            <h5 className="lg:text-3xl font-bold text-lg">
              {/* Additional profile information can go here */}
            </h5>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import GuestLayout from "../layouts/GuestLayout"; // Import the layout

export default function Guest() {
  return (
    <GuestLayout>
      {/* Any content specific to the Guest page goes here */}
      <div>
        <h1>Welcome to the Guest Page</h1>
        {/* Additional content can be added here */}
      </div>
    </GuestLayout>
  );
}

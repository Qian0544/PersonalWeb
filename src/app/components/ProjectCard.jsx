import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import Link from "next/link";

const ProjectCard = ({ imgUrl, videoUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="bg-[#181818] rounded-xl overflow-hidden">
      {/* Image or Video */}
      {videoUrl ? (
        <div className="h-52 md:h-72 relative group overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div
          className="h-52 md:h-72 relative group overflow-hidden"
          style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
      )}

      {/* Card Content */}
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-2 text-white">{title}</h5>
        <p className="text-[#ADB7BE] mb-6">{description}</p>

        {/* Buttons Row */}
        <div className="flex justify-between items-center">
          {/* Visit Button - Left */}
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            Visit
            <HiExternalLink className="w-5 h-5" />
          </Link>

          {/* GitHub Icon - Right */}
          <Link
            href={gitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center hover:bg-[#3d3d3d] transition-colors"
          >
            <FaGithub className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
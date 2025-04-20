import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

const topics = [
    {
        text: "Python",
        img: "/python.png",
        desc: "We discuss Python here, covering everything from basics to advanced topics like AI and automation.",
        slug: "pythonClub"
    },
    {
        text: "JavaScript",
        img: "/javascript.png",
        desc: "Explore JavaScript concepts, frameworks like React and Vue, and backend with Node.js.",
        slug: "jsClub"
    },
    {
        text: "DevOps",
        img: "/devops.png",
        desc: "Learn about CI/CD, Kubernetes, Docker, monitoring, and automation in DevOps.",
        slug: "devopsClub"
    },
    {
        text: "Cloud Computing",
        img: "/cloud.png",
        desc: "Discuss AWS, Azure, GCP, and best practices for cloud infrastructure and deployment.",
        slug: "cloudClub"
    },
    {
        text: "Cybersecurity",
        img: "/cybersecurity.png",
        desc: "Stay updated on security threats, ethical hacking, and best practices for protecting systems.",
        slug: "cyberClub"
    },
    {
        text: "AI & Machine Learning",
        img: "/ai.png",
        desc: "Dive into artificial intelligence, deep learning, and machine learning model building.",
        slug: "aiClub"
          }
];

export const Forums = () => {
    return (
      <div className="container mx-auto p-4 max-w-screen-lg">
        <h1 className="text-2xl font-bold mb-6">Discussion Forums</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            return (
              <div key={topic.img} className="shadow-lg bg-slate-500 p-4 rounded-lg overflow-hidden">
                <Image src={topic.img} width={100} height={100} alt={topic.text} className="rounded-md" />
                <h2 className="text-lg font-semibold mt-2">{topic.text}</h2>
                <p className="text-sm text-gray-200 mt-1">{topic.desc}</p>
                <Link href={`/forum/${topic.slug}`}>
                <Button className="mt-4  text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                    Join Discussion
                </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  

export default Forums;
import Image from "next/image";

interface ContactProps {
  containerColor?: string;
}

export default function Contact() {
  return (
    <div className={`backdrop-blur-sm rounded-lg p-8 transition-colors duration-1000`}>
      <div className="flex flex-col items-center">
        {/* Centered Image */}
        <div className="relative w-90 h-64 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/jodi.JPG"
            alt="Contact"
            fill
            className="object-cover"
            sizes="256px"
          />
        </div>
        
        {/* Description */}
        <p className="mt-6 text-center text-gray-600 dark:text-gray-300 max-w-md">
          I'm Jodi, and I like to code. 
        </p>
      </div>
    </div>
  );
}

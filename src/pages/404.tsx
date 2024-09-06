import { NextSeo } from "next-seo";
import Link from "next/link";
import { motion } from "framer-motion";

const NotFoundPage: React.FC = () => {
  return (
    <>
      {/* SEO configuration for the 404 page */}
      <NextSeo
        title="Page Not Found"
        description="Sorry, the page you are looking for does not exist."
        openGraph={{
          title: "404 - Page Not Found",
          description: "The page you are looking for does not exist.",
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/404`,
          site_name: "buzzvel-challenger",
        }}
      />
      <motion.div
        className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          404
        </h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link href="/" passHref>
          <a className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            Go Back Home
          </a>
        </Link>
      </motion.div>
    </>
  );
};

export default NotFoundPage;

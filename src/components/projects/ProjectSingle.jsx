import { motion } from "framer-motion";

const ProjectSingle = ({ title, image, desc, techStack, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <a
        href={url}
        aria-label="Single Project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className=" px-4 py-6">
            <p className="text-center font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">{title}</p>
            <p className="text-lg text-center text-ternary-dark dark:text-ternary-light">{desc}</p>
            <span className="block mt-10 text-lg text-ternary-dark dark:text-ternary-light text-center">{techStack}</span>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectSingle;

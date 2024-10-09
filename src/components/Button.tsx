import { motion } from 'framer-motion';

interface ButtonProps {
  message: string;
  height?: string;
  width?: string;
  text?: string;
  borderRadius?: string;
}

const Button: React.FC<ButtonProps> = ({
  message,
  height = 'h-10',   // Default height if not provided
  width = 'w-40',     // Default width if not provided
  text = 'text-xl',   // Default text size if not provided
  borderRadius = 'rounded-md' // Default border radius if not provided
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`bg-[#fb55ed] ${height} ${width} ${text} ${borderRadius} border-none font-medium font-robotoss text-center px-2`}
    >
      {message}
    </motion.button>
  );
};

export default Button;

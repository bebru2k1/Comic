const variantsBg = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};
const variantsAvatar = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { scale: 0, opacity: 0 },
};
const variantsDescription = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hidden: { opacity: 0, y: "-100%" },
};
export { variantsAvatar, variantsDescription, variantsBg };

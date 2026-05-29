export const getImageUrl = (path) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${path.replace(/^\/+/, "")}`;
};

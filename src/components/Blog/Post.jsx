const Post = (params) => {
  const { title, content, timestamp, image } = params;

  return (
    <div
      className="bg-tertiary bg-hero-pattern
      rounded-lg p-10 flex flex-col gap-5 w-96 md:w-[500px]"
    >
      <h2 className="text-3xl">{title}</h2>
      <p>{content}</p>
      <img src={image} alt="Blog Post" className="" />
      <p className="text-sm">{timestamp}</p>
    </div>
  );
};

export default Post;

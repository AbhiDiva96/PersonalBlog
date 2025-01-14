interface BlogContainerProps {
    id: number;
    title: string;
    description: string;
}

export const BlogContainer = ({id, title, description }: BlogContainerProps) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
            alt="Blog Image"
            className="w-full h-[250px] object-cover rounded-md shadow-lg"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-4">{description}</p>
                    <a
            href={`/article/${id}`} // Dynamically construct the URL with the article ID
            className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
            >
            Read More →
            </a>

        </div>
      </div>
    </div>
  );
};

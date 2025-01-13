
export const BlogContainer = () => {

    return <div>
           <div className="flex justify-center items-center gap-4  ">
             <div className="flex flex-col md:flex-row items-start p-6 border">
  
            <div className="flex md:w-1/5 flex-col items-center justify-center">
                <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                alt="Blog Image" 
                className="w-[120px] h-[200px] object-cover rounded-md shadow-md"
                />
            </div>
                <div className="w-full md:w-4/5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Blog Post Title</h1>
                    <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac nisi eu arcu ultricies 
                    vulputate. Vivamus gravida justo vel orci scelerisque. 
                    </p>
                    <a 
                    href="#" 
                    className="inline-block mt-4 text-blue-500 hover:text-blue-700 font-semibold"
                    >
                    Read More →
                    </a>
                </div>
                </div>
            </div>  
    </div>
}
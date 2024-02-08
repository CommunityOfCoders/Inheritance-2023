import { useContext } from 'react';
import { genContext } from '../contexts/GeneralContext';
import Blog from '../components/BlogPage'

const BlogPage = () => {


  const { open } = useContext(genContext)

  return (
    <div className="h-screen max-h-screen">
      <div className="flex justify-center items-center h-[calc(100vh-118px)]">
        <div className={`overflow-y-auto h-full ${open ? "w-[calc(100vw-224px)]" : "w-screen"} duration-300`}>
            <Blog/>
        </div>
      </div>


    </div>
  );
}

export default BlogPage;
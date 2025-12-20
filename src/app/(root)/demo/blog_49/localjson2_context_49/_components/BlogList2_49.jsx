import Wrapper from '../../../_assets/Wrapper/Blog2_49';
import Blog2_49 from './Blog2_49';

import { BlogContextProvider_49, useBlogContext_49 } from '../_blogContext_49';

const BlogList2_49 = () => {
  const { blogs_49 } = useBlogContext_49();
  return (
    <Wrapper>
      <div className='blogs-center'>
        {blogs_49?.map((item) => {
          const { id, title, descrip, category, img } = item;
          return (
            <Blog2_49
              key={id}
              id={id}
              title={title}
              descrip={descrip}
              category={category}
              img={img}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default BlogList2_49;
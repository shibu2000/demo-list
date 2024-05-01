import axios from "axios";
import ListItems from "../ui/list/listItems";

const page = async () => {
  const data = await axios.post(
    `${process.env.API_BASE_URL}/api/v1/course/list`
  );
  const courseList = data.data.value.courseList;
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-center text-4xl uppercase">API lists</h1>
      <div className="flex flex-col items-center justify-center gap-6 p-5">
        {courseList.map((list) => {
          return (
            <ListItems
              title={list.title}
              shortDesc={list.short_description}
              slug={list.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;

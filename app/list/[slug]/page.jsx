import axios from "axios";
import Image from "next/image";

const page = async ({ params }) => {
  const slug = params.slug;
  const data = await axios.post(
    `${process.env.API_BASE_URL}/api/v1/course/details`,
    {
      slug: slug,
    }
  );
  const course = data.data.value.courseDetails;
  return (
    <div className="container mx-auto p-5">
      <div>
        {/* <Image
          src={course.thumbnailImage}
          alt="thumbnail_Image"
          height={200}
          width={200}
        /> */}
        <p>Title: {course.title}</p>
        <p>Agerage rating: {course.avg_rating}</p>
        <p>Total rating:{course.total_rating} </p>
        <p>Total hours: {course.total_hours}</p>
        <p>Leactures: {course.leactures}</p>
        <p>Alimni: {course.alumni}</p>
        <p>Price: {course.price}</p>
        <p>Special price: {course.specialPrice}</p>
      </div>
    </div>
  );
};

export default page;

import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import HomePageBanner from "../HomePageBanner/HomePageBanner";

const Home = () => {
    return (
        <div>
           <HomePageBanner></HomePageBanner>
           <CategoryList></CategoryList>
           <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;
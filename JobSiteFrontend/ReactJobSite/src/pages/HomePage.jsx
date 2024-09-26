import Hero from "../components/Hero"
import HomeCards from "../components/HomeCards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs"
const HomePage = () => {
  return (
    <>
    {/*<!-- Hero -->*/}
    <Hero  title = "Test Title" subtitle = "This is the subtitle"></Hero>
    {/*<!-- Developers and Employers -->*/}
    <HomeCards></HomeCards>
    {/*<!-- Browse Jobs -->*/}
    <JobListings isHome = {true}></JobListings>
    <ViewAllJobs></ViewAllJobs>
  </>
  )
}

export default HomePage
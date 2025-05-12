import { Header } from "@/components/header";
import { VideoCard } from "@/components/video-card";
import { dummyCards } from "@/constants";

const ProfilePage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="bhadraagada@gmai.com"
        title="Bhadra Gada"
        userImg="/assets/images/jason.png"
      />
      <section className="video-grid">
        {dummyCards.map((card, index) => (
          <VideoCard {...card} key={index} />
        ))}
      </section>
    </div>
  );
};

export default ProfilePage;

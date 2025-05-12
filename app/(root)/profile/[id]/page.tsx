import { Header } from "@/components/header";

const ProfilePage = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="bhadraagada@gmai.com"
        title="Bhadra Gada"
        userImg="/assets/images/dummy.jpg"
      />
      ProfilePage : {id}
    </div>
  );
};

export default ProfilePage;

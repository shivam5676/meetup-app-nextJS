import MeetupList from "../components/meetups/MeetupList";
function HomePage() {
  const dummy_item = [
    {
      id: "a1",

      image:
        "https://en.wikipedia.org/wiki/Hampi#/media/File:Hampi_virupaksha_temple.jpg",
      title: "my first meet up",
      address: "the famous hampi cave",
    },
    {
      id: "a2",

      image:
        "https://www.istockphoto.com/photo/the-india-gate-in-delhi-gm898467608-247930024?phrase=delhi",
      title: "my second meet up",
      address: "india gate ,new delhi",
    },
  ];
  return <MeetupList meetups={dummy_item}></MeetupList>;
}

export default HomePage;

import React, { useEffect, useState } from "react";
import cns from "classnames";
import Usercard from "../../components/UserCard";
import styles from "./home.module.scss";
import Loader from "../../components/Loader";
import LogoutBtn from "../../components/LogoutBtn";

const Home = ({ contactList: allContacts }) => {
  const increment = 5;
  const [count, setCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [contactList, setcontactList] = useState(allContacts.slice(0, count));

  function setContacts() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setcontactList(allContacts.slice(0, count));
    }, 1000);
  }

  function setEventListener() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      console.log("reached bottom");
      setCount((count) => count + increment);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setEventListener);
    return () => {
      window.removeEventListener("scroll", setEventListener);
    };
  }, []);

  useEffect(() => {
    setContacts();
  }, [count]);

  return (
    <div className={styles.home}>
      <LogoutBtn />
      <div className={cns(styles.title, "text-center fw-bold")}>
        Contact List
      </div>
      {contactList?.map((contact, i) => (
        <Usercard key={i} details={contact} />
      ))}
      <Loader className={loading ? "display-block" : "display-none"} />
    </div>
  );
};

export async function getServerSideProps() {
  const userObj = { name: "John Doe", imageUrl: "/userImage.png" };
  const contactList = [];
  for (let i = 0; i < 100; i++) {
    contactList.push({ ...userObj, name: userObj.name + i });
  }
  return {
    props: {
      contactList,
    },
  };
}
export default Home;

import React, { useEffect, useState } from "react";
import cns from "classnames";
import Usercard from "../../components/UserCard";
import styles from "./home.module.scss";
import Loader from "../../components/Loader";
import LogoutBtn from "../../components/LogoutBtn";
import { FETCH_DELAY, FETCH_MORE_COUNT, CONTACTS_COUNT } from "../../helper.ts";

const Home = ({ contactList: allContacts }) => {
  const [count, setCount] = useState(20);
  const [loading, setLoading] = useState(false);
  const [contactList, setcontactList] = useState(allContacts.slice(0, count));

  function setContacts() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setcontactList(allContacts.slice(0, count));
    }, FETCH_DELAY);
  }

  function fetchMoreContacts() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setCount((count) => count + FETCH_MORE_COUNT);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fetchMoreContacts);
    return () => {
      window.removeEventListener("scroll", fetchMoreContacts);
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
  for (let i = 0; i < CONTACTS_COUNT; i++) {
    contactList.push({ ...userObj, name: userObj.name + i });
  }
  return {
    props: {
      contactList,
    },
  };
}
export default Home;

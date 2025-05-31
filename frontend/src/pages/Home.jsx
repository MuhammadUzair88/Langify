import React from "react";
import Card from "../components/Card";

const users = [
  {
    name: "Burak Örkmez",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    nativeLang: "spanish",
    nativeFlag: "https://flagcdn.com/w40/es.png",
    learningLang: "english",
    learningFlag: "https://flagcdn.com/w40/gb.png",
  },
  {
    name: "Aiko Tanaka",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    nativeLang: "japanese",
    nativeFlag: "https://flagcdn.com/w40/jp.png",
    learningLang: "french",
    learningFlag: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "Liam Smith",
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    nativeLang: "english",
    nativeFlag: "https://flagcdn.com/w40/gb.png",
    learningLang: "german",
    learningFlag: "https://flagcdn.com/w40/de.png",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen w-full p-5" data-theme="forest">
      <p className="text-3xl text-center lg:text-start mb-6 font-bold">
        Your Friends
      </p>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            avatar={user.avatar}
            nativeLang={user.nativeLang}
            nativeFlag={user.nativeFlag}
            learningLang={user.learningLang}
            learningFlag={user.learningFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

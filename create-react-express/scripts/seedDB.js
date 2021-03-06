const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);


const bookSeed = [
    {
      title: "1984",
      author: "George Orwell",
      description:
        "Winston Smith toes the Party line, rewriting history to satisfy the demands of the Ministry of Truth. With each lie he writes, Winston grows to hate the Party that seeks power for its own sake and persecutes those who dare to commit thoughtcrimes. But as he starts to think for himself, Winston can’t escape the fact that Big Brother is always watching... A startling and haunting vision of the world, 1984 is so powerful that it is completely convincing from start to finish. No one can deny the influence of this novel, its hold on the imaginations of multiple generations of readers, or the resiliency of its admonitions—a legacy that seems only to grow with the passage of time.",
      image:"https://images-eu.ssl-images-amazon.com/images/I/51iKrAFkNQL.jpg",
      link: "https://www.amazon.com/dp/B07JJ25HJC/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1",
      date: new Date(Date.now())
    },
    {
        title: "Becoming Michelle Obama",
        author: "Michelle Obama",
        description:
          "A story of intellegence and nice arms.",
        image:"hhttps://target.scene7.com/is/image/Target/GUEST_aff26ecc-9847-4fe3-8ac7-6e2ada4c32f2?wid=488&hei=488&fmt=pjpeg",
        link: "https://www.amazon.com/s/?ie=UTF8&keywords=becoming+michelle+obama&tag=googhydr-20&index=aps&hvadid=250280491172&hvpos=1t3&hvnetw=g&hvrand=1248072021797947011&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9032059&hvtargid=kwd-418306961703&ref=pd_sl_13w8ftam09_e",
        date: new Date(Date.now())
      }
  ];

  db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

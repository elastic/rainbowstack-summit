import { speakers } from "./speakers";

const findSpeaker = (name) => {
  return speakers[speakers.findIndex((speaker) => speaker.name === name)];
};

const setSessionDetails = (session, order) => {
  let sessionDetails = {};
  let date = session === "1" ? "Sept 8th" : "Sept 13th";
  let calendarLink =
    session === "1"
      ? "https://calendar.google.com/event?action=TEMPLATE&tmeid=NG0zaDJ1aG45dXU1bWthYTVwbWtrNHQ4MmogYnJpdHRhbnkuam9pbmVyQGVsYXN0aWMuY28&tmsrc=brittany.joiner%40elastic.co"
      : "https://calendar.google.com/event?action=TEMPLATE&tmeid=NmFsaGNxMnZjOThnMGRoaXByM25kczk0MDUgYnJpdHRhbnkuam9pbmVyQGVsYXN0aWMuY28&tmsrc=brittany.joiner%40elastic.co";

  return (sessionDetails = {
    calendarLink,
    date,
  });
};

export const talks = [
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T18:00:00.000Z",
    title: "Session 1 - Welcome and Kickoff",
    description:
      "Quick introduction, get settled in, and preview of upcoming talks for this session.",
    genre: "",
    speaker: [findSpeaker("Brittany Joiner")],
  },
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T18:05:00.000Z",
    title: "Queer Literature and Book Club Kickoff",
    description:
      "Take a deep dive into new releases in queer literature and the kick off for the Rainbow Stack Book Club!",
    genre: "LGBTQIA+",
    speaker: [findSpeaker("Cory Fairchild")],
  },
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T18:20:00.000Z",
    title: "Breaking the Cool/Uncool Binary",
    description:
      "If you’ve ever doubted how cool you are, this one’s for you! Let’s unpack what really goes into what is “cool” and how we can present what makes us unique without fear.",
    genre: "Self Care",
    speaker: [findSpeaker("Dany Johnson")],
  },
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T18:35:00.000Z",
    title: `"If you don't wanna qup": How I Made A New Prince Song from Old Prince Songs`,
    description:
      "Outlining the steps I took to make a neural network that generates Prince song lyrics.",
    genre: "Self Care",
    speaker: [findSpeaker("Courtney Wilburn")],
  },
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T18:50:00.000Z",
    title: "Diversity in Tech Panel",
    description:
      "Bring your questions and conerns and let's have an honest conversation about how to improve!",
    genre: "Tech",
    speaker: [
      findSpeaker("Priscilla Parodi"),
      findSpeaker("Javier Detrinidad"),
    ],
  },
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T19:10:00.000Z",
    title: "Finding Peace When the World's A Mess",
    description:
      "Our world is a bit chaotic these days to say the least. I've found these 6 practices can help you feel like a part of the kind of community we need in the world today. Suddenly you’re not alone against adversity, you’re  part of a very big “us” that’s full of miraculous people.",
    genre: "Self Care",
    speaker: [findSpeaker("Kiley Davidson")],
  },
  {
    sessionDetails: setSessionDetails("1"),
    sessionTime: "2022-09-08T19:25:00.000Z",
    title: "How I Helped Myself by Helping Others at codebar.io",
    description:
      "A few year ago I started volunteering at codebar.io , an organisation where we promote diversity in Tech by offering free coding workshop, and ... 👀",
    genre: "Tech",
    speaker: [findSpeaker("David Ricordel")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T13:00:00.000Z",
    title: "Session 2 - Welcome and Kickoff",
    description:
      "Quick introduction, get settled in, and preview of upcoming talks for this session.",
    genre: "",
    speaker: [findSpeaker("Anderson Queiroz")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T13:05:00.000Z",
    title:
      "There is Life Outside Your Apartment: How to make flexible working work for you!",
    description:
      "It's completely possible that you may never set foot in an Elastic office; however, that does not mean that you are relegated to your kitchen table at home. Elastic Workplace Guru, Corey, will walk you through all of the ways to make the most out of your distributed experience. From tricking out your home office to exploring coworking sites in your neighborhood through Desana, there are options available to make sure you can get all your best work done, no matter where you choose to work from!",
    genre: "Tech",
    speaker: [findSpeaker("Corey Williams")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T13:20:00.000Z",
    title: "How to Find and Support LGBTQIA+ Orgs",
    description:
      "Want to support more causes, but don't know where to start? Learn how to get involved with organizations and causes you're passionate about.",
    genre: "LGBTQIA+",
    speaker: [findSpeaker("Azka Sohail"), findSpeaker("Kelsey Fromal")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T13:35:00.000Z",
    title: "The Power of Reading the Docs",
    description:
      "Sometimes we see people who are experts, or have deep knowledge about something, a programming language, some program, a process, a technique or something else. To reach a similar level seems complicated, hard and we wonder how they achieved it. Most often than not, the secret might be just to read the docs. I'll share some real life examples to show the power of reading the docs and, I hope, they will inspire you.",
    genre: "Tech",
    speaker: [findSpeaker("Anderson Queiroz")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T13:50:00.000Z",
    title: "Who to follow, who to unfollow and why that meme got you muted",
    description:
      "Need a laugh? Here's the best twitter accounts to follow for some good humor and entertainment.",
    genre: "LGBTQIA+",
    speaker: [findSpeaker("Wes Mason")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T14:05:00.000Z",
    title: "Making Tech Careers Accessible for Everyone",
    description:
      "This is gonna be a great talk description. It will be a good one i'm sure, but it's not ready yet. So guess you'll need to come back!",
    genre: "Tech",
    speaker: [findSpeaker("Brittany Joiner")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T14:20:00.000Z",
    title: "Pilots Follow Checklist",
    description:
      "I’m a pilot and I love flying!  One of the most important things I had to learn is to follow a checklist - even AND SPECIALLY if my engine is on fire.  What does flying, following checklists, and DEI have in common?  I’ll share a few experiences and connections around creating and following checklists.",
    genre: "Show Me",
    speaker: [findSpeaker("Javier Detrinidad")],
  },
  {
    sessionDetails: setSessionDetails("2"),
    sessionTime: "2022-09-13T14:35:00.000Z",
    title: "Making music can make you happier",
    description:
      "Making music is one of the things that I enjoy the most, it really helps me disconnect, relax and have fun. Anyone can make music with the right tools, let me show you some of the tools I use.",
    genre: "Self Care",
    speaker: [findSpeaker("Julio Camarero")],
  },
];

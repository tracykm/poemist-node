import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const john = await prisma.user.upsert({
    where: { username: "John" },
    update: {},
    create: {
      username: "John",
    },
  });
  const warAndPeace = await prisma.book.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      author: "Leo Tolstoy",
      title: "War and Peace",
      text: "\nThe old prince dressed leisurely in his study, frowning and considering what he was to do. The coming of these visitors annoyed him. “What are Prince Vasíli and that son of his to me? Prince Vasíli is a shallow braggart and his son, no doubt, is a fine specimen,” he grumbled to himself. What angered him was that the coming of these visitors revived in his mind an unsettled question he always tried to stifle, one about which he always deceived himself. The question was whether he could ever bring himself to part from his daughter and give her to a husband. The prince never directly asked himself that question, knowing beforehand that he would have to answer it justly, and justice clashed not only with his feelings but with the very possibility of life. Life without Princess Mary, little as he seemed to value her, was unthinkable to him. “And why should she marry?” he thought. “To be unhappy for certain. There’s Lise, married to Andrew—a better husband one would think could hardly be found nowadays—but is she contented with her lot? And who would marry Marie for love? Plain and awkward! They’ll take her for her connections and wealth. Are there no women living unmarried, and even the happier for it?” So thought Prince Bolkónski while dressing, and yet the question he was always putting off demanded an immediate answer. Prince Vasíli had brought his son with the evident intention of proposing, and today or tomorrow he would probably ask for an answer. His birth and position in society were not bad. “Well, I’ve nothing against it,” the prince said to himself, “but he must be worthy of her. And that is what we shall see.”\n\n“That is what we shall see! That is what we shall see!” he added aloud.\n\nHe entered the drawing room with his usual alert step, glancing rapidly round the company. He noticed the change in the little princess’ dress, Mademoiselle Bourienne’s ribbon, Princess Mary’s unbecoming coiffure, Mademoiselle Bourienne’s and Anatole’s smiles, and the loneliness of his daughter amid the general conversation. “Got herself up like a fool!” he thought, looking irritably at her. “She is shameless, and he ignores her!”\n\nHe went straight up to Prince Vasíli.\n\n“Well! How d’ye do? How d’ye do? Glad to see you!”\n\n“Friendship laughs at distance,” began Prince Vasíli in his usual rapid, self-confident, familiar tone. “Here is my second son; please love and befriend him.”\n\nPrince Bolkónski surveyed Anatole.\n\n“Fine young fellow! Fine young fellow!” he said. “Well, come and kiss me,” and he offered his cheek.\n\nAnatole kissed the old man, and looked at him with curiosity and perfect composure, waiting for a display of the eccentricities his father had told him to expect.\n\nPrince Bolkónski sat down in his usual place in the corner of the sofa and, drawing up an armchair for Prince Vasíli, pointed to it and began questioning him about political affairs and news. He seemed to listen attentively to what Prince Vasíli said, but kept glancing at Princess Mary.\n\n“And so they are writing from Potsdam already?” he said, repeating Prince Vasíli’s last words. Then rising, he suddenly went up to his daughter.\n\n“Is it for visitors you’ve got yourself up like that, eh?” said he. “Fine, very fine! You have done up your hair in this new way for the visitors, and before the visitors I tell you that in future you are never to dare to change your way of dress without my consent.”\n\n“It was my fault, mon père,” interceded the little princess, with a blush.\n\n“You must do as you please,” said Prince Bolkónski, bowing to his daughter-in-law, “but she need not make a fool of herself, she’s plain enough as it is.”\n\nAnd he sat down again, paying no more attention to his daughter, who was reduced to tears.\n\n“On the contrary, that coiffure suits the princess very well,” said Prince Vasíli.\n\n“Now you, young prince, what’s your name?” said Prince Bolkónski, turning to Anatole, “come here, let us talk and get acquainted.”\n\n“Now the fun begins,” thought Anatole, sitting down with a smile beside the old prince.\n\n“Well, my dear boy, I hear you’ve been educated abroad, not taught to read and write by the deacon, like your father and me. Now tell me, my dear boy, are you serving in the Horse Guards?” asked the old man, scrutinizing Anatole closely and intently.\n\n“No, I have been transferred to the line,” said Anatole, hardly able to restrain his laughter.\n\n“Ah! That’s a good thing. So, my dear boy, you wish to serve the Tsar and the country? It is wartime. Such a fine fellow must serve. Well, are you off to the front?”\n\n“No, Prince, our regiment has gone to the front, but I am attached... what is it I am attached to, Papa?” said Anatole, turning to his father with a laugh.\n\n“A splendid soldier, splendid! ‘What am I attached to!’ Ha, ha, ha!” laughed Prince Bolkónski, and Anatole laughed still louder. Suddenly Prince Bolkónski frowned.\n\n“You may go,” he said to Anatole.\n\nAnatole returned smiling to the ladie",
    },
  });
  const bleakHouse = await prisma.book.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      author: "Charles Dickens",
      title: "Bleak House",
      text: "\nMy dear old doll! I was such a shy little thing that I seldom dared to open my lips, and never dared to open my heart, to anybody else. It almost makes me cry to think what a relief it used to be to me when I came home from school of a day to run upstairs to my room and say, 'Oh, you dear faithful Dolly, I knew you would be expecting me!' and then to sit down on the floor, leaning on the elbow of her great chair, and tell her all I had noticed since we parted. I had always rather a noticing way—not a quick way, oh, no!—a silent way of noticing what passed before me and thinking I should like to understand it better. I have not by any means a quick understanding. When I love a person very tenderly indeed, it seems to brighten. But even that may be my vanity.\n\nI was brought up, from my earliest remembrance—like some of the princesses in the fairy stories, only I was not charming—by my godmother. At least, I only knew her as such. She was a good, good woman! She went to church three times every Sunday, and to morning prayers on Wednesdays and Fridays, and to lectures whenever there were lectures; and never missed. She was handsome; and if she had ever smiled, would have been (I used to think) like an angel—but she never smiled. She was always grave and strict. She was so very good herself, I thought, that the badness of other people made her frown all her life. I felt so different from her, even making every allowance for the differences between a child and a woman; I felt so poor, so trifling, and so far off that I never could be unrestrained with her—no, could never even love her as I wished. It made me very sorry to consider how good she was and how unworthy of her I was, and I used ardently to hope that I might have a better heart; and I talked it over very often with the dear old doll, but I never loved my godmother as I ought to have loved her and as I felt I must have loved her if I had been a bett",
    },
  });
  console.log({ warAndPeace, john, bleakHouse });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

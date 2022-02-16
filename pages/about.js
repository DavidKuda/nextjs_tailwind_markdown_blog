import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="kuda.ai | David Kuda on Code, Guitar and Life." />
        <meta property="og:title" content="kuda.ai" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kuda.ai/about" />
        <meta property="og:image" content="https://images.ctfassets.net/pedj0c0bs6fa/qwPcHTncKrThonbe8Pawy/03ce84edcd7470ca8d622a404e7d2e8a/dave.jpg?w=800" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="prose md:text-base text-xs">
        <img src="https://images.ctfassets.net/pedj0c0bs6fa/qwPcHTncKrThonbe8Pawy/03ce84edcd7470ca8d622a404e7d2e8a/dave.jpg?w=800" />
        <p>Hello ! Thank you so much for coming here !</p>
        <p>
          My name is David (some call me DataDave ^^), I am a Data Engineer with
          Alexander Thamm GmbH. I am a self-taught developer. In 2018 I
          graduated in Business Communications from HWZ Hochschule für
          Wirtschaft Zürich / HWZ University of Applied Sciences Zurich. Since
          2019 I live in Berlin. Berlin has a vibrant tech scene and inspired me
          to get into code. I came here for my then-girlfriend now-wife. Since
          2021 we are parents of a very sweet girl.
        </p>
        <p>
          I have many interests and am very curious and open-minded by nature.
        </p>

        <h3 className="gradient-text text-2xl font-light">
          The topics I will probably cover in this blog:
        </h3>
        <ul className="simple-list">
          <li>
            <b>Code.</b> Software Engineering has become such a big thing in my
            life. It has been an incredible journey and I am very grateful that
            I can do what I do. Sometimes I find things that I do so interesting
            that I want to write about them and share them with the world.
            Sometimes I figure out things that might be useful for other people
            too. A recent example could be: "How can you authenticate to AWS ECR
            to register your docker images from GitLab CI?" Other ideas are
            reviewing online courses or pondering upon the technologies I use
            for this blog.
          </li>
          <li>
            <b>Guitar.</b> I love playing the guitar and jam around. When you
            play an instrument you might sometimes have aha-moments. Thinking
            about these aha-moments is meaningful to me and I would like to
            share some of these every now and then.
          </li>
          <li>
            <b>Life.</b> What does life mean? Why are we here? What is really
            meaningful? I have been thinking about these things since a
            childhood, and perhaps I might write about these things as well.
          </li>
        </ul>
        <p>
          I am never exactly sure why of all people you should read me / listen
          to me. Who am I that I could tell you something about these things? I
          don't know. I want to avoid meaninglessness, redundancy, irrelevance
          and I truly want to bring value to those who take the moment to
          listen. I regard this blog as an experiment, let's see where it leads.
        </p>
        <h3 className="gradient-text text-2xl font-light">
          Why I am starting this blog:
        </h3>
        <ul className="simple-list">
          <li>
            Bring value to the world, or at least to those on the world who
            share the same interests as I do.
          </li>
          <li>
            Writing makes things clear and obvious. It's effective to process
            and structure life.
          </li>
          <li>To have a space to create things, as I like creating things.</li>
          <li>
            Get better at web development, experiment and tinker with
            technology.
          </li>
          <li>Because I enjoy writing.</li>
          <li>
            Sometimes I find things very useful myself so that I want to have a
            reference to it that I can also easily share.
          </li>
        </ul>
      </main>
    </div>
  );
}
